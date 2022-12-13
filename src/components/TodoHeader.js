import React from "react";
import styled from "styled-components";

const TodoHeaderDiv = styled.div`
  h1 {
    margin: 20px;
    padding-left: 10px;
    padding-bottom: 12px;
    border-bottom: 3px solid #717171;
  }
`;

function TodoTemplate() {
  return (
    <TodoHeaderDiv>
      <h1>To do List ✔</h1>
    </TodoHeaderDiv>
  );
}

export default TodoTemplate;
