import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";

interface Fields {
  username: string;
  password: string;
}

export const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Fields>();
  const onSubmit: SubmitHandler<Fields> = (data) => console.log(data);

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <span className="header">Login</span>
        <label>Username</label>
        <input {...register("username", { required: true, maxLength: 100 })} />
        {errors.username && errors.username.type === "required" && (
          <span className="error-message">This field is required.</span>
        )}
        {errors.username && errors.username.type === "maxLength" && (
          <span className="error-message">
            You have exceeded the character limit.
          </span>
        )}
        <label>Password</label>
        <input
          type="password"
          {...register("password", {
            minLength: {
              value: 8,
              message: "Password needs to between 8 and 25 characters",
            },
            maxLength: {
              value: 25,
              message: "Password needs to between 8 and 25 characters",
            },
          })}
        />
        {errors.password && errors.password.type === "required" && (
          <span className="error-message">This field is required.</span>
        )}
        {errors.password && errors.password.type === "maxLength" && (
          <span className="error-message">
            You have exceeded the character limit.
          </span>
        )}
        <button type="submit">Login</button>
        <Link to="/signup">
          <a href="/signup">Create an account</a>
        </Link>
      </form>
    </div>
  );
};
