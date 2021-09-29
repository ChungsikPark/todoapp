import React from "react";
import { SafeAreaView } from "react-native";
import styled from "@emotion/native";
import ToDoDetail from "../../../src/components/units/detail/TodoDetail.component";

const Container = styled.View`
  background: #fcf9ee;
`;

const Detail = ({ navigation }: any) => {
  return (
    <SafeAreaView>
      <Container>
        <ToDoDetail navigation={navigation} />
      </Container>
    </SafeAreaView>
  );
};

export default Detail;
