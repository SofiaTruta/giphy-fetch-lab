import GifListItem from "./GifListItem";

const GifList = ({ gifs }) => {
    console.log(gifs)
    return (
        <div className="gif-list">
            <p>test test</p>
      
                {gifs && gifs.map((gif) => (
                    <GifListItem gif={gif} key={gif.id} />
                ))}
          
        </div>
    );
}

export default GifList;