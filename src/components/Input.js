import { useReducer } from "react";

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
        <div>
            <input type="text" onChange={(e)=>dispatch({type:"input_change", input: e.target.value})}/>
            <button onClick={()=> dispatch({type:"list_change"})}>등록</button>
            <p>{state.list}</p>
        </div>
    );
}

