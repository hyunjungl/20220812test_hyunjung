import styled from "styled-components";
import Item from "./Item";
import React from "react";


export default React.memo(function TodoList({
  todo_list,
  removeTodo,}) {
  return (
    <Block>
      <ul>
        {todo_list.map((todo)=> (
        <Item key={todo.id} todo={todo} removeTodo={()=>removeTodo(todo.id)}/>
))}
      </ul>
    </Block>
  );
});

const Block = styled.ul`
  flex: 1;
`;
