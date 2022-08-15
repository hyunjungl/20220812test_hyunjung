import styled from "styled-components";


export default function Header(){
    return(
        <Block>
            <h2>투두 리스트</h2>
        </Block>
    )
}

const Block=styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`
