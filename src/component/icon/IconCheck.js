import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

IconCheck.propTypes = {};
const Styled = styled.div`
  img {
    width: 20px;
    height: 20px;
    margin-right: 12px;
  }
`;
function IconCheck(props) {
  return (
    <Styled>
      <img src="https://static.vecteezy.com/system/resources/previews/002/743/514/original/green-check-mark-icon-in-a-circle-free-vector.jpg"></img>
    </Styled>
  );
}

export default IconCheck;
