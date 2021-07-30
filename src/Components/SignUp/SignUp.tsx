import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import "./SignUp.css";

interface Inputs {
  name: string;
  username: string;
  email: string;
  password: string;
}

export const SignUp: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input {...register("name")} />
        <label>Username</label>
        <input {...register("username")} />
        <label>E-mail</label>
        <input {...register("email")} />
        <label>Password</label>
        <input type="password" {...register("password")} />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};
