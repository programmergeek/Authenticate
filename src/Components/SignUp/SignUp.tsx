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
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)} id="sign-up-form">
        <label>Name</label>
        <input {...register("name", { required: true, maxLength: 100 })} />
        {errors.name && errors.name.type === "required" && (
          <span className="error-message">This field is required.</span>
        )}
        {errors.name && errors.name.type === "maxLength" && (
          <span className="error-message">
            You have exceeded the character limit.
          </span>
        )}
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
        <label>E-mail</label>
        <input
          {...register("email", {
            required: true,
            pattern: {
              message: "Enter a valid email address",
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            },
          })}
        />
        {errors.email && errors.email.type === "required" && (
          <span className="error-message">This field is required.</span>
        )}
        {errors.email && errors.email.type === "pattern" && (
          <span className="error-message">Enter a valid email address.</span>
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};
