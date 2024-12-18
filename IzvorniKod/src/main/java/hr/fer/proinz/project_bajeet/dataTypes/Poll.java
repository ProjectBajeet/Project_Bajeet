package hr.fer.proinz.project_bajeet.dataTypes;

import jakarta.persistence.*;
import lombok.Data;
import java.util.Set;

@Data
@Entity
@Table(name = "poll")
public class Poll {
    @Id
    @OneToOne (cascade = CascadeType.ALL)
    @MapsId
    @JoinColumn(name ="message_id")
    private hr.fer.proinz.project_bajeet.dataTypes.Message message;

    private String title;

    @OneToMany(mappedBy = "targetPoll")
    Set<Vote> votes;
}