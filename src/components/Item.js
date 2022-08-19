import styled, { css } from "styled-components";
import { useTodoDispatch } from './useTodoContext';



export default function Item({todo}) {
  const dispatch = useTodoDispatch();

  const toggleTodo = () => {
    dispatch({ type: "toggle_todo", id: todo.id });
  };

  const removeTodo = () => {
    dispatch({ type: "remove_todo", id: todo.id });
  };

  return (
    <Block done={todo.done} onClick={toggleTodo}>
      <TodoText>{todo.text}</TodoText>

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

const TodoText = styled.p`
  font-size: 15px;
  flex: 1;
  margin-left: 10px;
`;