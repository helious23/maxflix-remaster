import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { atom, useRecoilState } from "recoil";

interface IToDo {
  id: number;
  text: string;
  category: "TO_DO" | "DOING" | "DONE";
}

const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

interface IForm {
  toDo: string;
}

export const ToDoList = () => {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const {
    register,
    handleSubmit,
    setValue,
    setFocus,
    formState: { errors },
  } = useForm<IForm>({
    mode: "all",
  });

  const onValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { id: Date.now(), text: toDo, category: "TO_DO" },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };
  console.log(toDos);

  useEffect(() => {
    setFocus("toDo");
  }, [setFocus]);

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("toDo", {
            required: "할 일을 입력하세요",
            minLength: {
              value: 2,
              message: "두 글자 이상 입력이 필요합니다",
            },
          })}
          type="text"
          placeholder="Write to do..."
        />
        <button>add</button>
        <span>{errors?.toDo?.message}</span>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <li key={toDo.id}>{toDo.text}</li>
        ))}
      </ul>
    </div>
  );
};
