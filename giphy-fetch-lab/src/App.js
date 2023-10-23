import SearchBar from './components/SearchBar'
import GifList from './components/GifList'
import { useState } from 'react'

function App() {
  const [gifs, setGifs] = useState()

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

  return (
    <div className='App'>
      <h1>Search for any GIFs</h1>
      <SearchBar onSearch={onSearch} />
      <GifList gifs={gifs} />
    </div>
  );
}

export default App;
