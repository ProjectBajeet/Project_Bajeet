package hr.fer.proinz.project_bajeet.service;

import hr.fer.proinz.project_bajeet.payload.LoginRequest;
import lombok.NoArgsConstructor;
import hr.fer.proinz.project_bajeet.dataTypes.User;
import hr.fer.proinz.project_bajeet.dataTypes.User.Role;
import hr.fer.proinz.project_bajeet.data.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {
    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private PasswordEncoder passwordEncoder;
    
    @Autowired
    private AuthenticationManager authenticationManager;

    public User signup(LoginRequest input) {
        User user = new User();
        user.setUsername(input.getUsername());
        user.setPasswordHash(passwordEncoder.encode(input.getPassword()));
        user.setRole(Role.ADMIN);

        return userRepository.save(user);
    }

    public User authenticate(LoginRequest input) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        input.getUsername(),
                        input.getPassword()
                )
        );

        return userRepository.findByUsername(input.getUsername())
                .orElseThrow();
    }
}