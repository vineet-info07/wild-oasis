import React from "react";
import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.div`
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row>
          <Row type="horizontal">
            <Heading as="h1">The Wild Oasis!</Heading>
            <div>
              <Heading as="h2">Check in and Out</Heading>
              <Button onClick={() => alert("Check in")}>Check In</Button>
              <Button onClick={() => alert("Check out")}>Check Out</Button>
            </div>
          </Row>
          <Row type="vertical">
            <div>
              <Heading as="h3">Forms!</Heading>
              <Input type="number" placeholder="Number of guests" />
              <Input type="number" placeholder="Number of guests" />
            </div>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
