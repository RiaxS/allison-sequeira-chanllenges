import React from "react";

function Chapter ({ img, title}){
    return (
        <div>
            <img src={img} alt="" />
            <p>{title}</p>
        </div>
    )
}

export default Chapter;