import React, { useState, useEffect } from 'react';
import './App.css';
import Cards from './Cards';
// import Loader from './Loader';

const url = 'https://jsonplaceholder.typicode.com/photos';

function App() {
  const [data, setData] = useState([]);

  const removeCards = (id) => {
    const filterCards = data.filter((item) => item?.id !== id);
    setData(filterCards);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      const temp = [];
      for (let index = 0; index < 500; index++) {
        temp.push(data[index]);
      }
      setData(temp);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Cards data={data} removeCards={removeCards} />
    </div>
  );
}

export default App;
