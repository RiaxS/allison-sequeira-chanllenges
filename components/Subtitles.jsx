import React from "react";

function Subtitles({items}) {
    return (
        <div className="subtitle-container">
            {items.map((subtitles) => (
                <p>{subtitles.title}</p>
            ))}
        </div>
    );
}

export default Subtitles;