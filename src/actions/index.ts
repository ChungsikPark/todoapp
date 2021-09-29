import * as actionTypes from "./actonTypes";

let newTodoId = 0;
export const createTodo = (createTodo: string) => ({
  type: actionTypes.CREATE_TODO,
  payload: {
    id: newTodoId++,
    text: createTodo,
  },
});

export const toggleTodo = (id: number) => ({
  type: actionTypes.TOGGLE_TODO,
  payload: {
    id: id,
  },
});

export const deleteTodo = (id: number) => ({
  type: actionTypes.DELETE_TODO,
  payload: {
    id: id,
  },
});

export const updateTodo = (id: number, text: string) => ({
  type: actionTypes.UPDATE_TODO,
  payload: {
    id: id,
    text: text,
  },
});

export const getTodo = () => ({
  type: actionTypes.GET_TODO,
});

export const goToDetail = (id: number) => ({
  type: actionTypes.GOTO_DETAIL,
  payload: {
    id: id,
  },
});
