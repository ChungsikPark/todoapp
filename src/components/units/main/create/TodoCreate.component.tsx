import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Container, Input } from "./TodoCreate.styles";
import Icon from "react-native-vector-icons/Feather";
import { useDispatch } from "react-redux";
import { createTodo } from "../../../../actions";

const TodoCreate = () => {
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();
  const onCreateTodo = () => {
    dispatch(createTodo(newTodo));
    setNewTodo("");
  };
  return (
    <Container>
      <Input
        value={newTodo}
        maxLength={50}
        autoCapitalize="none"
        autoCompleteType="off"
        placeholder="오늘 해야 할 일을 적으세요 :)"
        onChangeText={(text) => setNewTodo(text)}
      />
      <TouchableOpacity onPress={onCreateTodo}>
        <Icon name="plus-circle" size={25} color="#004E7C" />
      </TouchableOpacity>
    </Container>
  );
};

export default TodoCreate;
