import React from "react";
import styled from "styled-components";

const TodoCreateDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 26px;
  margin: auto;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  background-color: #d9d9d9;
  input {
    height: 40px;
    font-size: 23px;
    border: none;
  }
  .createButton {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    font-weight: 700;
    cursor: pointer;
    padding-left: 16px;
  }
`;

function TodoCreate({ value, onChange, onCreate, onKeyPress }) {
  return (
    <TodoCreateDiv>
      <input
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
        placeholder="new task"
      />
      <div className="createButton" onClick={onCreate}>
        +
      </div>
    </TodoCreateDiv>
  );
}

export default TodoCreate;
