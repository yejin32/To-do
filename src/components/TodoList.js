import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListDiv = styled.div`
  height: 100%;
  padding-top: 13px;
`;

function TodoList() {
  return (
    <TodoListDiv>
      <TodoItem text="데일리 코딩 풀기" />
      <TodoItem text="Zoom 17시 들어가기" />
      <TodoItem text="Todolist 구현하기" />
      <TodoItem text="백준 알고리즘 문제풀기" />
    </TodoListDiv>
  );
}

export default TodoList;
