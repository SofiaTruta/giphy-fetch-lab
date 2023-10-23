import GifListItem from "./GifListItem";

const GifList = ({searchResult}) => {

    return (
        <div className="gif-list">
             {data.map((gif) => {
                <GifListItem key={gif.id} data={gif} />
             })}
        </div>
    );
}

export default GifList;