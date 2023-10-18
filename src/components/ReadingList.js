import React from "react";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import ReadingListCard from "./ReadingListCard";

const ReadingList = () => {
    const { newsList, total } = useSelector((store) => store.readingList);

    return (
        <div className="ReadingListContainer">
            {total === 0 ? (
                <p>You have not added any article yet</p>
            ) : (
                <ul>
                    {newsList.map((article) => (
                        <li key={article.id}>
                            <ReadingListCard article={article} />
                        </li>
                    ))}
                </ul>
                )}
        </div>
    );
}

export default ReadingList;