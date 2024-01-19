import { useRef, useState } from "react";

export default () => {
  const ref = useRef();
  const [value, setValue] = useState(0);

  return (
    <>
      <input ref={ref} type="number" min="0" max="10" value={value} onChange={event => setValue(event.currentTarget.value)} />
      <span>{ref.current && ref.current.validationMessage}</span>
    </>
  );
};
