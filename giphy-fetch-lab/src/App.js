import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import GifList from './components/GifList';


const App = () => {
  const [gifs, setGifs] = useState([]);

  const doThaSearchInit = async (searchTerm) => {
    const apiKey = process.env.REACT_APP_GIPHY_API_KEY;
    const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}`;

    const response = await fetch(apiUrl);
    const data = await response.json();
    setGifs(data.data);
  };

  return (
    <div>
      <h1>Search for GIFs</h1>
      <SearchBar onSearch={doThaSearchInit} />
      <GifList gifs={gifs} />
    </div>
  );
};

export default App;
