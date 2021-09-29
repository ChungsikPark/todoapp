import React from "react";
import { FlatList } from "react-native";
import TodoItem from "../item/TodoItem.component";
import { useDispatch, useSelector } from "react-redux";
import { toggleTodo, deleteTodo, goToDetail } from "../../../../actions";
import { RootState } from "../../../../reducers";

const TodoList = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos);
  console.log("list-todos: ", todos);
  const onToggleTodo = (id: number) => {
    dispatch(toggleTodo(id));
  };

  const onDeleteTodo = (id: number) => {
    dispatch(deleteTodo(id));
  };

  const onGoToDetail = (id: number) => {
    dispatch(goToDetail(id));
    navigation.navigate("detail");
  };

  return (
    <FlatList
      data={todos}
      keyExtractor={({ id }) => String(id)}
      renderItem={({ item }) => (
        <TodoItem
          key={item.id}
          todo={item}
          handleToggleTodo={onToggleTodo}
          handleDeleteTodo={onDeleteTodo}
          handleGoToDetail={onGoToDetail}
        />
      )}
    />
  );
};

export default TodoList;
