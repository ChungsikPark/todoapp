import React from "react";
import styled from "@emotion/native";

interface IProps {
  onPress: () => void;
  buttonName: string;
}

const ButtonContainer = styled.TouchableOpacity`
  background-color: #e2e1d7;
`;
const ButtonText = styled.Text`
  font-size: 21px;
  color: #1c1c1c;
`;

const Button = ({ onPress, buttonName }: IProps) => {
  return (
    <ButtonContainer onPress={onPress}>
      <ButtonText>{buttonName}</ButtonText>
    </ButtonContainer>
  );
};

export default Button;
