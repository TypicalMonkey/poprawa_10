import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/')
      .then(response => response.text())
      .then(data => setMessage(data))
      .catch(error => console.error('Błąd podczas pobierania danych:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Prosta aplikacja kliencka</h1>
        <p>Wiadomość z serwera: {message}</p>
      </header>
    </div>
  );
}

export default App;
