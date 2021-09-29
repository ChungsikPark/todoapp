import React from "react";
import { TouchableOpacity } from "react-native";
import { Container, SubContainer, Content } from "./TodoItem.styles";
import Icon from "react-native-vector-icons/Feather";
import { Todo } from "../../../../reducers/todosReducer";

interface IProps {
  todo: Todo;
  handleToggleTodo: (id: number) => void;
  handleDeleteTodo: (id: number) => void;
  handleGoToDetail: (id: number) => void;
}

const TodoItem = ({
  todo,
  handleToggleTodo,
  handleDeleteTodo,
  handleGoToDetail,
}: IProps) => {
  const onToggleTodo = () => {
    handleToggleTodo(todo.id);
  };
  const onDeleteTodo = () => {
    handleDeleteTodo(todo.id);
  };
  const onGoToDetail = () => {
    handleGoToDetail(todo.id);
  };
  return (
    <Container>
      <SubContainer>
        <TouchableOpacity onPress={onToggleTodo}>
          <Icon
            name={todo.completed ? "check-circle" : "circle"}
            size={25}
            color={todo.completed ? "#004E7C" : "#e2e1d7"}
            style={{ marginRight: "5%" }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{ width: "80%" }} onPress={onGoToDetail}>
          <Content completed={todo.completed} numberOfLines={1}>
            {todo.text}
          </Content>
        </TouchableOpacity>
      </SubContainer>
      <TouchableOpacity onPress={onDeleteTodo}>
        <Icon name="trash-2" size={25} color="#d67193" />
      </TouchableOpacity>
    </Container>
  );
};

export default TodoItem;
