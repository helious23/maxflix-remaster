import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toDoState } from "../atoms";

interface IForm {
  toDo: string;
}

export const CreateToDo = () => {
  const setToDos = useSetRecoilState(toDoState);
  const onValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { id: Date.now(), text: toDo, category: "TO_DO" },
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
  } = useForm<IForm>({
    mode: "all",
  });

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
