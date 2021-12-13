import { atom } from "recoil";
import { loadTodos } from "./handle.localstorage";

export interface IToDo {
  id: number;
  text: string;
}

export interface IToDoState {
  [key: string]: IToDo[];
}

export const defaultToDos: IToDoState = {
  "To Do": [],
  Doing: [],
  Done: [],
};

export const toDoState = atom<IToDoState>({
  key: "toDos",
  default: loadTodos() ?? defaultToDos,
});
