import { useForm } from "react-hook-form";

interface IForm {
  email: string;
  name: string;
  username: string;
  password: string;
  password1: string;
  extraError?: string;
}

export const ToDoList = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com",
    },
  });
  const onValid = (data: IForm) => {
    if (data.password !== data.password1) {
      setError(
        "password1",
        { message: "비밀번호가 일치하지 않습니다" },
        { shouldFocus: true }
      );
    }
    // setError("extraError", { message: "Server Offline" });
  };
  console.log(errors);

  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          type="email"
          placeholder="E-mail"
          {...register("email", {
            required: "이메일은 필수 항목 입니다",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "naver@com 이 필요합니다",
            },
          })}
        />
        <span>{errors?.email?.message}</span>
        <input
          type="text"
          placeholder="Name"
          {...register("name", {
            required: "성함은 필수 항목 입니다",
            validate: {
              noMax: (value) =>
                !value.includes("max") || "max 는 포함할수 없습니다",
            },
          })}
        />
        <span>{errors?.name?.message}</span>
        <input
          type="text"
          placeholder="Username"
          {...register("username", {
            required: "사용자명은 필수 항목 입니다",
            minLength: {
              value: 5,
              message: "사용자명은 5글자 이상이 필요합니다",
            },
          })}
        />
        <span>{errors?.username?.message}</span>
        <input
          type="text"
          placeholder="Password"
          {...register("password", {
            required: "비밀번호는 필수 항목 입니다",
            minLength: {
              value: 8,
              message: "비밀번호는 8글자 이상이 필요합니다",
            },
          })}
        />
        <span>{errors?.password?.message}</span>
        <input
          type="text"
          placeholder="Confirm Password"
          {...register("password1", {
            required: "비밀번호 확인이 필요합니다",
            minLength: {
              value: 8,
              message: "비밀번호는 8글자 이상이 필요합니다",
            },
          })}
        />
        <span>{errors?.password1?.message}</span>
        <button>Add</button>
        <span>{errors?.extraError?.message}</span>
      </form>
    </div>
  );
};
