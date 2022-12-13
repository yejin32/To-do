import React from "react";
import styled from "styled-components";
import { MdOutlineDeleteForever, MdDone } from "react-icons/md";

const TodoItemDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 14px 0;
  color: #717171;
`;
const CheckCircle = styled.div`
  font-size: 24px;
  border: 3px solid #717171;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 20px;
  cursor: pointer;
`;
const Text = styled.div`
  flex: 1;
  font-size: 21px;
`;
const Delete = styled.div`
  font-size: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 20px;
  cursor: pointer;
  &:hover {
    color: #ff1a1a;
  }
`;

function TodoItem({ id, done, text }) {
  return (
    <TodoItemDiv>
      <CheckCircle>
        <MdDone />
      </CheckCircle>
      <Text>{text}</Text>
      <Delete>
        <MdOutlineDeleteForever />
      </Delete>
    </TodoItemDiv>
  );
}

export default TodoItem;
