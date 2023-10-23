const GifListItem = ({ data }) => {
    return (
        <div className="gif-list-item">
            <img src="data.imgUrl" alt="data.title" />
            <p>{data.title}</p>
        </div>
    );
}

export default GifListItem;