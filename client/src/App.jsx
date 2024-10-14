import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch the message from the backend
    axios.get('/api/message')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.error('Error fetching message:', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>{message ? message : 'Loading...'}</h1>
    </div>
  );
}

export default App;
