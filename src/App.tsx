import React from "react";
import styled from "styled-components";
// import UploadForm from "./components/upload_form";
import Aside from "./components/aside";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
  grid-template-rows: 10% auto 10%;
  height: 100vh;
`;

const Nav = styled.nav`
  grid-column: 2 /13;
  background-color: blue;
  display: flex;
  align-items: center;
  padding: 20px;
  font-size: 20px;
  font-weight: 500;
  color: #fff;
  background-color: #212121;
  letter-spacing: 0.02em;
`;

const Main = styled.main`
  grid-column: 2/13;
  background-color: grey;
`;
const Footer = styled.footer`
  grid-column: span 12;
  background-color: orange;
`;

const App: React.FC = () => {
  return (
    <Container>
      {/* <UploadForm /> */}
      <Nav>Take me home</Nav>
      <Aside>aside</Aside>
      <Main>main</Main>
      <Footer>footer</Footer>
    </Container>
  );
};

export default App;
