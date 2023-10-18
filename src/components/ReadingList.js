import React from "react";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";

const ReadingList = () => {
    const { newsList, total } = useSelector((store) => store.readingList);

    return (
        <div className="main">
            {total === 0 ? (
                <p>You have not added any article yet</p>
            ) : (
                <p>Your articles will show up here</p>
                )}
        </div>
    );
}

export default ReadingList;