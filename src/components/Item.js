import styled, { css } from "styled-components";

export default function Item({todo,removeTodo}) {
  const {done}=todo;
  return (
    <Block done={done}>
      <DelBtn onClick={removeTodo}>
        <div>Delete</div>
      </DelBtn>
    </Block>
  );
}

const Block = styled.li`
  border-bottom: 1px solid blueviolet;
  user-select: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  cursor: pointer;
  ${({ done }) =>
    done &&
    css`
      p {
        text-decoration: line-through;
        color: #ddd;
      }
    `}
`;

const DelBtn = styled.div`
  overflow: hidden;
  div {
    padding: 3px 5px;
    background-color: red;
    color: white;
    transform: translate(100%);
    transition: 0.2s;
  }
  &:hover {
    div {
      transform: translate(0);
    }
  }
`;
