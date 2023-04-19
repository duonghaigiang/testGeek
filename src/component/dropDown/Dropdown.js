import React from "react";
import PropTypes from "prop-types";
import { Button, Dropdown } from "antd";
import styled from "styled-components";
import { getTask } from ".././API/Api";
import { useAuth } from "../context/contextAPI";
Dropdownn.propTypes = {};
const Styled = styled.div`
  margin-left: 2px;
  .dataName {
    background-color: #fff;
    padding: 2px;
    margin-top: 12px;
    font-size: 16px;
    border-radius: 12px;
  }
  .dataNameItem:hover {
    cursor: pointer;
    background-color: #ccc;
    opacity: 0.7;
  }
`;
function Dropdownn({ data }) {
  const { task, SetTask, setCurentName, search } = useAuth();
  const handleFetachtask = async (item) => {
    const res = await getTask(item.id);
    setCurentName(item.name);
    if (res) {
      SetTask(res);
      console.log(task);
    } else {
      console.log("không lấy được dữ liệu");
    }
  };
  const filteredData = search.name
    ? data.filter((item) =>
        item.name.toLowerCase().includes(search.name.toLowerCase())
      )
    : data;
  return (
    <Styled>
      <div className="dataName">
        {filteredData.map((item) => (
          <div
            key={item.id}
            className="dataNameItem"
            onClick={() => {
              handleFetachtask(item);
            }}
          >
            <div>{item.name}</div>
          </div>
        ))}
      </div>
    </Styled>
  );
}

export default Dropdownn;
