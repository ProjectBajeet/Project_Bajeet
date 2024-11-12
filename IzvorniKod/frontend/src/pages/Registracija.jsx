// Registracija.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Registracija = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password || !confirmPassword) {
      setError('Molimo unesite sve podatke');
    } else if (password !== confirmPassword) {
      setError('Lozinke se ne podudaraju');
    } else {
      setError('');
      console.log('Registracija podaci:', { username, password });
      // Ovdje bi bila logika za registraciju
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-16 p-8 border rounded-3xl shadow-lg">
      <h2 className="text-2xl text-center mb-4">Registracija</h2>
      {error && <div className="text-red-500 text-center mb-4">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">Korisničko ime</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 mt-2 border rounded-md"
            placeholder="Unesite korisničko ime"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Lozinka</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mt-2 border rounded-md"
            placeholder="Unesite lozinku"
            required
          />
        </div>
    
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md">
          Registriraj se
        </button>
      </form>
      <div className="text-center mt-4">
        <p>Već imate račun?</p>
        <Link to="/" className="text-blue-500 hover:underline">
          Povratak na prijavu
        </Link>
      </div>
    </div>
  );
};

export default Registracija;