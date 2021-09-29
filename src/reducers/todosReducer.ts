import * as actionTypes from "../actions/actonTypes";
import * as actionCreator from "../actions/index";

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type TodoState = Todo[];

type TodosAction =
  | ReturnType<typeof actionCreator.createTodo>
  | ReturnType<typeof actionCreator.toggleTodo>
  | ReturnType<typeof actionCreator.deleteTodo>
  | ReturnType<typeof actionCreator.goToDetail>;

const initialState: TodoState = [];

const todos = (state = initialState, action: TodosAction) => {
  switch (action.type) {
    case actionTypes.CREATE_TODO:
      return state.concat({
        id: action.payload.id,
        // @ts-ignore
        text: action.payload.text,
        completed: false,
      });
    case actionTypes.CREATE_TODO:
      return state.concat({
        id: action.payload.id,
        // @ts-ignore
        text: action.payload.text,
        completed: false,
      });
    case actionTypes.CREATE_TODO:
      return state.concat({
        id: action.payload.id,
        // @ts-ignore
        text: action.payload.text,
        completed: false,
      });

    case actionTypes.TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );

    case actionTypes.DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload.id);

    case actionTypes.GOTO_DETAIL:
      return {
        ...state,
        detail: state.filter((todo) => todo.id === action.payload.id)[0],
      };

    case actionTypes.UPDATE_TODO:
      return state.map((todo) =>
        todo.id === action.payload.id
          ? // @ts-ignore
            { ...todo, text: action.payload.text }
          : todo
      );

    default:
      return state;
  }
};

export default todos;
