import React from "react";
import styled from "styled-components";

const Header = styled.h1`
  color: green;
  font-size: 30px;
  font-weight: 600;
`;

const Button = styled.button`
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  border: none;
  border-radius: 7px;
  background-color: purple;
  color: white;
  cursor: pointer;
  margin: 20px;
`;

const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 0.8rem 1.2rem;
`;

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <StyledApp>
      <Header>The Wild Oasis!</Header>
      <Button onClick={() => alert("Check in")}>Check In</Button>
      <Button onClick={() => alert("Check out")}>Check Out</Button>
      <Input type="number" placeholder="Number of guests" />
    </StyledApp>
  );
}

export default App;
