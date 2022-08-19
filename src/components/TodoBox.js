import React, { createContext } from "react";
import styled from "styled-components";
import { useTodoState } from "./useTodoContext";
import Header from "./Header";
import Input from "./Input";
import TodoList from "./TodoList";

export const TodoContext = createContext(null);

export default function TodoBox() {
  const { count, input, todo_list } = useTodoState();


  return (
    <Container>
      <Block>
        <Header count={count}></Header>
        <TodoList todo_list={todo_list} />
        <Input input={input} />
      </Block>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: pink;
  width: 100vw;
  height: 100vh;
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 500px;
  background-color: white;
  border: 1px solid #ff69b4;
`;
