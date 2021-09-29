import { Api } from "./api";
import * as actionTypes from "../actions/actonTypes";
import { put, call, takeLatest } from "redux-saga/effects";

interface ResponseGenerator {
  data?: any;
  headers?: any;
  status?: number;
  statusText?: string;
}

function* createTodo(action: any) {
  try {
    const addedTodo: ResponseGenerator = yield call(Api.createTodo, action);
    console.log("addedTodo: ", addedTodo);
    yield put({
      type: actionTypes.CREATE_TODO_SUCCEEDED,
      data: addedTodo,
    });
  } catch (error) {
    yield put({ type: actionTypes.CREATE_TODO_FAILED, error: error });
  }
}
function* toggleTodo(action: any) {
  try {
    const toggledTodo: ResponseGenerator = yield call(Api.toggleTodo, action);
    yield put({
      type: actionTypes.TOGGLE_TODO_SUCCEEDED,
      data: toggledTodo,
    });
  } catch (error) {
    yield put({ type: actionTypes.TOGGLE_TODO_FAILED, error: error });
  }
}
function* deleteTodo(action: any) {
  try {
    const deletedTodo: ResponseGenerator = yield call(Api.deleteTodo, action);
    if (deletedTodo === true) {
      yield put({
        type: actionTypes.DELETE_TODO_SUCCEEDED,
        data: action.payload.id,
      });
    }
  } catch (error) {
    yield put({ type: actionTypes.DELETE_TODO_FAILED, error: error });
  }
}
function* updateTodo(action: any) {
  try {
    const updatedTodo: ResponseGenerator = yield call(Api.updateTodo, action);
    yield put({
      type: actionTypes.UPDATE_TODO_SUCCEEDED,
      data: updatedTodo,
    });
  } catch (error) {
    yield put({ type: actionTypes.UPDATE_TODO_FAILED, error: error });
  }
}
function* getTodo() {
  try {
    const gotTodo: ResponseGenerator = yield call(Api.getTodo);
    yield put({
      type: actionTypes.GET_TODO_SUCCEEDED,
      data: gotTodo,
    });
  } catch (error) {
    yield put({ type: actionTypes.GET_TODO_FAILED, error: error });
  }
}

export function* watchCreateTodo() {
  yield takeLatest(actionTypes.CREATE_TODO_REQUESTED, createTodo);
}
export function* watchToggleTodo() {
  yield takeLatest(actionTypes.TOGGLE_TODO_REQUESTED, toggleTodo);
}
export function* watchDeleteTodo() {
  yield takeLatest(actionTypes.DELETE_TODO_REQUESTED, deleteTodo);
}
export function* watchUpdateTodo() {
  yield takeLatest(actionTypes.UPDATE_TODO_REQUESTED, updateTodo);
}
export function* watchGetTodo() {
  yield takeLatest(actionTypes.GET_TODO_REQUESTED, getTodo);
}
