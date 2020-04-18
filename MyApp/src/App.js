import React from 'react';
import './App.css';
import HomePage from './HomePage'


function App() {
 
  fetch('http://localhost:3000/api/v1/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      user: {
        username: "ericahawkins",
        password: "tricksareforkids",
      }
    })
  })
    .then(r => r.json())
    .then(console.log)


  return (
    <div>
      <header>
        <HomePage />
      </header>
    </div>
  );
}

export default App;
