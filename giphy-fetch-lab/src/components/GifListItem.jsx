const GifListItem = ({ gif }) => {
    return (
        <div className="gif-list-item">
            <img src={gif.images.original.url} alt={gif.title} />
            <p>{gif.title}</p>
        </div>
    );
}

export default GifListItem;