import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

Header.propTypes = {};
const Style = styled.div`
  width: 100%;
  height: 1px;
  position: relative;
  ::after {
    position: absolute;
    content: "";
    height: 100%;
    top: 50;
    left: 0;
    display: block;
    width: 100%;
    background-color: #ccc;
  }
`;
function Header(props) {
  return <Style>USER</Style>;
}

export default Header;
