import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import GifList from './components/GifList';


<<<<<<< HEAD
const App = () => {
  const [gifs, setGifs] = useState([]);

  const doThaSearchInit = async (searchTerm) => {
    const apiKey = process.env.REACT_APP_GIPHY_API_KEY;
    const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}`;

    const response = await fetch(apiUrl);
    const data = await response.json();
    setGifs(data.data);
  };
=======
  async function onSearch(searchTerm) {
    try {
      const response = await fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${process.env.REACT_APP_GIPHY_API_KEY}&limit=8`)
      const data = await response.json()
      // console.log(data.data);
      setGifs(data.data)
    } catch (err) {
      console.error(err)
    }
  }
>>>>>>> main

  return (
    <div>
      <h1>Search for GIFs</h1>
      <SearchBar onSearch={doThaSearchInit} />
      <GifList gifs={gifs} />
    </div>
  );
};

export default App;
