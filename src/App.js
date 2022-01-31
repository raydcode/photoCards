import React, { useState, useEffect } from 'react';
import './App.css';
import Cards from './Cards';
import Loader from './Loader';

const url = 'https://jsonplaceholder.typicode.com/photos';

function App() {
  const [tours, setTours] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setTours(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Cards data={tours} />
    </div>
  );
}

export default App;
