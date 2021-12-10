import { CreateToDo } from "./CreateToDo";
import { useRecoilValue } from "recoil";
import { toDoSelector } from "../atoms";
import { ToDo } from "./ToDo";
import { SelectToDo } from "./SelectToDo";

export const ToDoList = () => {
  const toDos = useRecoilValue(toDoSelector);

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <SelectToDo />
      <CreateToDo />
      <ul>
        {toDos?.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </div>
  );
};
