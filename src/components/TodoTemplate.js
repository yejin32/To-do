import React from "react";
import styled from "styled-components";

const TodoTemplateDiv = styled.div`
  width: 460px;
  height: 660px;
  background: #fff8f2;
  /* position: relative; 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
  border-radius: 10px;

  margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */

  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
`;

function TodoTemplate({ children }) {
  return <TodoTemplateDiv>{children}</TodoTemplateDiv>;
}

export default TodoTemplate;
