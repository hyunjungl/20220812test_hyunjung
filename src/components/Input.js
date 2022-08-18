import { useReducer } from "react";
import styled, { css } from "styled-components";


const initialState = {
    input:"",
    list: "",
};

function reducer(state, action){
    switch(action.type) {
        case "input_change":
            return {...state, input: action.input };
            case "list_change":
                return{...state, list: state.input};
        default:
            return state;
    }

}

export default function Input(){
    const [state, dispatch] = useReducer(reducer, initialState);
    return(
        <Block>
            <input type="text" onChange={(e)=>dispatch({type:"input_change", input: e.target.value})}/>
            <Button onClick={()=> dispatch({type:"list_change"})}>등록</Button>
        </Block>
    );
}


const Block = styled.div`
  padding: 10px;
  input {
    width: 98%;
    height: 30px;
    border: 1px solid blueviolet;
    margin-bottom: 5px;
    transform: scaleY(0);
    transition: transform 0.25s;
    transform-origin: bottom;
  }

  ${(isEdit) =>
    isEdit &&
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
  ${({ isNotEmpty }) =>
    isNotEmpty &&
    css`
      background-color: blueviolet;
      cursor: pointer;
    `}
`;

