import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { toDoState, categoryState } from "../atoms";

interface IForm {
  toDo: string;
}

export const CreateToDo = () => {
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const onValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { id: Date.now(), text: toDo, category },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };

  const {
    register,
    handleSubmit,
    setValue,
    setFocus,
    formState: { errors },
  } = useForm<IForm>();

  useEffect(() => {
    setFocus("toDo");
  }, [setFocus]);

  return (
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
  );
};
