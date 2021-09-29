import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../commons/buttons/Button";
import {
  Container,
  InputContainer,
  Input,
  ButtonContainer,
} from "./TodoDetail.styles";
import { deleteTodo, updateTodo } from "../../../actions";
import { RootState } from "../../../reducers";

const ToDoDetail = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos);
  console.log("detail-todos: ", todos);
  const [newTodo, setNewTodo] = useState(todos.detail.text);
  const onDeleteTodo = () => {
    dispatch(deleteTodo(todos.detail.id));
  };

  const onUpdateTodo = () => {
    dispatch(updateTodo(todos.detail.id, newTodo));
    navigation.goBack();
  };

  return (
    <Container>
      <InputContainer>
        <Input
          multiline={true}
          autoCapitalize="none"
          onChangeText={(text) => setNewTodo(text)}
        >
          {newTodo}
        </Input>
      </InputContainer>
      <ButtonContainer>
        <Button onPress={onDeleteTodo} buttonName="Delete" />
        <Button onPress={onUpdateTodo} buttonName="Update" />
      </ButtonContainer>
    </Container>
  );
};

export default ToDoDetail;
