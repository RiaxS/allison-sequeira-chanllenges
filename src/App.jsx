import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "../components/Header";
import Caption from "../components/Caption";
import Chapter from "../components/Chapter";
import Chapters from "../components/Chapters";
import image1 from "../src/images/tree.png";
import image2 from "../src/images/back.jpg";
import Legend from "../components/Legend";
import Data from "../src/data.json"
import Subtitles from "../components/Subtitles";

const mockChapters = [
  { img: "../images/tree.png", title: "Tree Title",},
  { img: "../images/tree.png", title: "Tree Title",},
  { img: "../images/tree.png", title: "Tree Title",},
  { img: "../images/tree.png", title: "Tree Title",},
  { img: "../images/tree.png", title: "Tree Title",},
  { img: "../images/tree.png", title: "Tree Title",},
  { img: "../images/tree.png", title: "Tree Title",},
  { img: "../images/tree.png", title: "Tree Title",},
  { img: "../images/tree.png", title: "Tree Title",},
  { img: "../images/tree.png", title: "Tree Title",},
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Caption
        title={Data.captionTitle}
        imgNumber=""
        logo=""
      ></Caption>
      <hr />
      <Header title={Data.title}></Header>
      <hr />
      <Chapters items={Data.chapters}></Chapters>
      <hr />
      <Subtitles items={Data.subtitles}></Subtitles>
      <img src={image2} alt="" />
      <Legend text={Data.legend}></Legend>
    </div>
  );
}

export default App;
