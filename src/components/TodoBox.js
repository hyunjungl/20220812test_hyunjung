import styled from "styled-components";



export default function TodoBox({ children }) {
  return (
    <Container>
      <Block>{children}</Block>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: pink;
  width: 100vw;
  height: 100vh;
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 500px;
  background-color: white;
  border: 1px solid #ff69b4;
`;
