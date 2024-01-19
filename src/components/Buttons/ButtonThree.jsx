import { styled } from "styled-components";

export default ({text}) => {
  const Button = styled.button`
    background-color: rgb(160, 244, 181);
    color: white;
    &:hover {
      background-color: white;
      color: rgb(160, 244, 181);
    }
    &:active {
        background-color: rgb(104, 249, 140);
        color: white;
    }
  `;
  return (
    <>
      <Button type="button">{text}</Button>
    </>
  );
};
