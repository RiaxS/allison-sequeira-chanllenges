import React from "react";
import Chapter from "./Chapter";

function Chapters({items}) {
  return (
    <div className="chapters-full-container">
        <ul>
        {items.map((chapters) => (
          <li key={chapters.chapterTitle}>
            <p>{chapters.chapterTitle}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Chapters;
