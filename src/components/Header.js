import styled from "styled-components";

export default function Header({ count }) {
  return (
    <Block>
      <h2>2022년 8월 12일</h2>
      <p>해야할 일 : {count}개</p>
    </Block>
  );
}

const Block = styled.header`
  color: blueviolet;
  padding: 0 10px;
  margin: 10px;
  h2 {
    margin-bottom: 10px;
  }
  p {
    font-size: 12px;
  }
`;
