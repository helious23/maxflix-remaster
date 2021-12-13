import { IToDoState } from "./atoms";

export const LOCAL_TODOS = "toDos";

export const loadTodos = () => {
  const localToDos = localStorage.getItem(LOCAL_TODOS);
  if (localToDos) {
    return JSON.parse(localToDos);
  }
  return null;
};

export const saveToDos = (toDos: IToDoState) => {
  localStorage.setItem(LOCAL_TODOS, JSON.stringify(toDos));
};
