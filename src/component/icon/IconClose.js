import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

IconClose.propTypes = {};
const Styled = styled.div`
  img {
    width: 20px;
    height: 20px;
    margin-right: 12px;
  }
`;
function IconClose(props) {
  return (
    <Styled>
      <img src="https://static.vecteezy.com/system/resources/previews/018/887/462/original/signs-close-icon-png.png"></img>
    </Styled>
  );
}

export default IconClose;
