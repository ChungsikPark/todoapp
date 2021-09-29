import styled from "@emotion/native";

interface IProps {
  completed: boolean;
}

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 5%;
  padding: 5%;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 5px;
`;

export const SubContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 90%;
`;

export const Content = styled.Text`
  font-size: 21px;
  line-height: 21px;
  color: ${(props: IProps) => (props.completed ? "#e2e1d7" : "#1c1c1c")};
`;
