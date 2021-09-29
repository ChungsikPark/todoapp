import React from "react";
import styled from "@emotion/native";

const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10%;
  background: #1c1c1c;
`;
const Title = styled.Text`
  font-size: 21px;
  color: #fcf9ee;
`;

const Header = () => {
  return (
    <Container>
      <Title>할 일 목록</Title>
    </Container>
  );
};

export default Header;
