import TodoBox from "./components/TodoBox";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Input from "./components/Input";
import { createGlobalStyle } from 'styled-components';
import { useReducer } from "react";

const GlobalStyle = createGlobalStyle`
    * {
      list-style: none;
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
  `;
const initialState ={
  input:"",
  list:[
    {id:1, text:"input 상태 관리하기",done: false},
    {id: 2, text: "todo-list 출력하기", done:false},
  ],
}

function reducer(state, action){
  switch (action.type){
    case "change_input":
      return{...state, input: action.input};
      case "create_todo":
        return{ 
          ...state,
          input:"",
          todo_list: state.todo_list.concat({
            id: action.id,
            text: state.input,
            done:false,
          }),
        };
        case "remove_todo":
          return{
            ...state, 
            todo_list: state.todo_list.filter((todo)=>todo.id !== action.id),
          };
        default:
          return state;
  }
}

function App() {
const {
  state,
  removeTodo,
}= useTodo();

  return (
    <>
    <GlobalStyle/>
      <TodoBox>
        <Header />
        <TodoList  />
        <Input />
      </TodoBox>
    </>
  );

  }


export default App;
