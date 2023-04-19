import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useAuth } from "../context/contextAPI";
import IconCheck from "../icon/IconCheck";
import IconClose from "./../icon/IconClose";
import { markTaskDone } from "../API/Api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
Contents.propTypes = {};
const Styled = styled.div`
  border: 1px solid #000;
  padding: 12px;
  margin-top: 12px;
  border-radius: 12px;
  .wrapName {
    display: flex;
    background-color: #0e8ef1;
    margin-top: 12px;
    padding: 4px;
    width: 450px;
    border-radius: 12px;
    align-items: center;
  }
  .userName {
    font-size: 22px;

    font-style: italic;
  }
  .userNameItem {
    color: #fff;
    margin-left: 12px;
    font-size: 18px;
  }
  .wrapTask {
    margin-top: 12px;
  }
  .wrapNameTask {
    margin-left: 6px;
    font-size: 16px;
  }
  .contentItem {
    display: flex;
    padding: 4px;
    font-size: 18px;
    margin-top: 2px;
    border-radius: 8px;
    background-color: #ccc;
  }
  .contentItemNone {
    display: flex;
    padding: 4px;
    font-size: 18px;
    margin-top: 2px;
    border-radius: 8px;
    background-color: #ccc;
    justify-content: space-between;
  }
  .contentItemMark {
    color: #000;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    border: 1px solid #000;
    border-radius: 12px;
  }
  .contentItemMark:hover {
    opacity: 0.7;
    background-color: #fff;
  }
`;
function Contents({ task }) {
  const { curentName, SetTask, tasks } = useAuth();
  const sortedTasks = task.sort((a, b) => a.completed - b.completed);
  const numberTask = task.length;
  const numberCplTask = () => {
    let numberTaskComplted = 0;
    task.map((item) => {
      if (item.completed === true) {
        numberTaskComplted = numberTaskComplted + 1;
      } else {
        return;
      }
    });
    return numberTaskComplted;
  };
  const handleMarkdone = async (item) => {
    const res = await markTaskDone(item.id);
    if (res) {
      const taskIndex = tasks.findIndex((t) => t.id === item.id);

      // Create a new tasks array with the updated task
      const updatedTasks = [
        ...task.slice(0, taskIndex),
        res,
        ...task.slice(taskIndex + 1),
      ];

      // Update the tasks state with the new tasks array
      SetTask(updatedTasks);
      toast.success("task has marked ");
    }
  };
  return (
    <Styled>
      <div className="wrapName">
        <div className="userName">User Name :</div>
        <div className="userNameItem"> {curentName}</div>
        <div className="wrapNameTask">
          Task :{numberTask}/{numberCplTask()}
        </div>
      </div>
      <div className="wrapTask">
        {sortedTasks.map((item) =>
          item.completed === true ? (
            <div
              key={item.id}
              className="contentItem"
              style={{ color: "green" }}
            >
              <IconCheck></IconCheck>
              {item.title}
            </div>
          ) : (
            <div
              key={item.id}
              className="contentItemNone"
              style={{ color: "red" }}
            >
              <div className="contentItem">
                <IconClose></IconClose>
                {item.title}
              </div>
              <div
                className="contentItemMark"
                onClick={() => {
                  handleMarkdone(item);
                }}
              >
                Mark done
              </div>
            </div>
          )
        )}
      </div>
    </Styled>
  );
}

export default Contents;
