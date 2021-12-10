import { CreateToDo } from "./CreateToDo";
import { ToDo } from "./ToDo";
import { useRecoilValue } from "recoil";
import { toDoState } from "../atoms";

export const ToDoList = () => {
  const toDos = useRecoilValue(toDoState);
  console.log(toDos);
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateToDo />
      <ul>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </div>
  );
};
