import React from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUsers,
  faImage,
  faCamera
} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Container = styled.aside`
  grid-column: span 1;
  grid-row: 1/3;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding: 20px 0;
  text-align: center;
  color: #fff;
  background-color: #424242;
`;

const AnimationEffects = css`
  transition: 0.2s;
  &:hover {
    transform: scale(1.3);
  }
  &:active {
    transform: scale(0.95);
  }
`;

const ButtonLink = styled(Link)`
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  transition: 0.2s;
  color: #000;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: hsla(0, 0%, 100%, 0.08);
    & svg path {
      fill: #fff;
      transition: 0.2s;
    }
  }

  &:visited {
    color: #000;
  }

  &:hover svg {
    ${AnimationEffects}
  }
`;

const Icon = styled(FontAwesomeIcon)``;

const Aside: React.FC = () => {
  return (
    <Container>
      <Router>
        <ButtonLink to="/">
          <Icon size="2x" icon={faHome} />
        </ButtonLink>
        <ButtonLink to="/">
          <Icon size="2x" icon={faUsers} />
        </ButtonLink>
        <ButtonLink to="/">
          <Icon size="2x" icon={faImage} />{" "}
        </ButtonLink>
        <ButtonLink to="/">
          <Icon size="2x" icon={faCamera} />
        </ButtonLink>
      </Router>
    </Container>
  );
};

export default Aside;
