import Input from "./components/Input";
import { createGlobalStyle } from "styled-components";
import Header from "./components/Header";


const GlobalStyle = createGlobalStyle`
    * {
      list-style: none;
      box-sizing: border-box;
      margin: 0;
      padding: 0;

    }
  `;


function App() {
return (
  <>
  <GlobalStyle/>
  <Header/>
  <Input/>
  
  </>
)
}

export default App;
