import { useRef, useState } from "react";

export default () => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  return (
    <>
      <div className="modal-button">
        <button onClick={() => setOpen(!open)}>Click me :D</button>
      </div>
      <dialog className="modal-content" ref={ref} open={open}>
        <div className="close-modal-button-container">

      <button className="close-modal-button" onClick={() => setOpen(!open)}>X</button>
        </div>
        <h2 className="modal-title">
          Modal
        </h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
          obcaecati eveniet voluptatibus corporis modi inventore cum maxime
          error soluta rem.
        </p>
      </dialog>
    </>
  );
};
