import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Input from "./components/Input/Input";
import Scroll from "./components/Scroll/Scroll";
import Modal from "./components/Modal/Modal";
import { createPortal } from "react-dom";
import ButtonOne from "./components/Buttons/ButtonOne";
import ButtonTwo from "./components/Buttons/ButtonTwo";
import ButtonThree from "./components/Buttons/ButtonThree";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {createPortal(<Modal />, document.body)}
      <Input></Input>
      <div className="buttons-containers">
        <p>Plain Css</p>
      <ButtonOne text="Option One"/>
      <p>CSS Modules</p>
      <ButtonTwo text="Option Two"/>
      <p>Styled Components</p>
      <ButtonThree text="Option Three"/>
      </div>
    </>
  );
}

export default App;
