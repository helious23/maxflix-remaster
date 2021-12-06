import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: ${(props) => props.bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.textColor};
`;

function App() {
  return (
    <Wrapper>
      <Box bgColor="teal">Hello</Box>
      <Box bgColor="tomato" />
    </Wrapper>
  );
}

export default App;
