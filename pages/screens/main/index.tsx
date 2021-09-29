import React from "react";
import { SafeAreaView } from "react-native";
import styled from "@emotion/native";
import Header from "../../../src/components/commons/layout/Header";
import TaskList from "../../../src/components/units/main/list/TodoList.component";
import TaskAdd from "../../../src/components/units/main/create/TodoCreate.component";

const Container = styled.View`
  background: #fcf9ee;
  height: 100%;
`;
const TaskContainer = styled.View`
  height: 90%;
  padding: 5%;
`;
const Main = ({ navigation }: any) => {
  return (
    <SafeAreaView>
      <Container>
        <Header />
        <TaskContainer>
          <TaskAdd />
          <TaskList navigation={navigation} />
        </TaskContainer>
      </Container>
    </SafeAreaView>
  );
};

export default Main;
