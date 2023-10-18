const ReadingListCard = ({ article }) => {
    return (
        <div className="readin-list-card">
            <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">{article.description}</p>
                <a href={article.url} className="btn btn-primary">Read</a>
            </div>
        </div>
    );
};

export default ReadingListCard;