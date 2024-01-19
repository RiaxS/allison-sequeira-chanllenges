import { styled } from "styled-components";

export default () => {
  const Button = styled.button`
    background-color: rgb(160, 244, 181);
    color: white;
    &:hover {
      background-color: white;
      color: rgb(160, 244, 181);
    }
  `;
  return (
    <>
      <Button type="button">Option Three</Button>
    </>
  );
};
