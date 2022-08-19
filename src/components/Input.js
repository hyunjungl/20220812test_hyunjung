import React, { useState } from "react";
import { useTodoDispatch, useTodoNextId } from "./useTodoContext";
import styled, { css } from "styled-components";

export default React.memo(function TodoInput({ input }) {
  const [active, setActive] = useState(false);
  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const createTodo = () => {
    dispatch({ type: "create_todo", id: nextId.current });
    nextId.current++;
  };

  const handleInput = (e) => {
    dispatch({ type: "change_input", input: e.target.value });
  };

  const onClickButton = () => {
    if (active && input.trim() === "") return;
    if (active) {
      createTodo();
      setActive(false);
    } else {
      setActive(true);
    }
  };

    return(
        <Block active={active}>
            <input type="text" onChange={handleInput} value={input} />
            <Button onClick={onClickButton}>등록</Button>
        </Block>
    );
});


const Block = styled.div`
  padding: 10px;
  input {
    width: 100%;
    height: 30px;
    border: 1px solid blueviolet;
    margin-bottom: 5px;
    transform: scaleY(0);
    transition: transform 0.25s;
    transform-origin: bottom;
  }
  ${(active) =>
    active &&
    css`
      input {
        transform: scaleY(1);
      }
    `};
`;

const Button = styled.button`
  width: 100%;
  height: 30px;
  border: none;
  background: blueviolet;
  border: 1px solid blueviolet;
  color: white;
 
`;

