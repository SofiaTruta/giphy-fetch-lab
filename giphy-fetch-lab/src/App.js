import './App.css';

function App() {
  async function onSearch(searchTerm) {
    try {
      const response = await fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${process.env.GIPHY_API_KEY}&limit=8`)
      const data = await response.json()
      return data
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className='App'>
      <h1>Search for any GIFs</h1>
      <SearchBar onSearch={onSearch} />
      <GifList searchTerm={searchTerm} />
    </div>
  );
}

export default App;
