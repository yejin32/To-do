import React from "react";
import styled from "styled-components";
import TodoTemplate from "./components/TodoTemplate";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";

const Style = styled.div`
  body {
    /* background-color: black; */
  }
`;

function App() {
  return (
    <Style>
      <TodoTemplate>
        <TodoHeader />
        <TodoCreate />
        <TodoList />
      </TodoTemplate>
    </Style>
  );
}

export default App;
