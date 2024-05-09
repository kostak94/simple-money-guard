import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomField from "../CustomField/CustomField";
import { Link } from "react-router-dom";

const AuthForm = ({ type, onSubmit, schema }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {type === "register" && (
        <CustomField
          type="text"
          placeholder="Name"
          {...register("username")}
          error={errors.username?.message}
        />
      )}
      <CustomField
        type="email"
        placeholder="email"
        {...register("email")}
        error={errors.email?.message}
      />
      <CustomField
        type="password"
        placeholder="password"
        {...register("password")}
        error={errors.password?.message}
      />
      {type === "register" && (
        <CustomField
          type="password"
          placeholder="confirm password"
          {...register("confirmPassword")}
          error={errors.confirmPassword?.message}
        />
      )}

      <button type="submit">
        {type === "register" ? "Register" : "Login"}
      </button>
      {/* <Link to={type === " register" ? "/login" : "/register"}>
        <button>{type === "register" ? "Login" : "Register"}</button>
      </Link> */}
    </form>
  );
};

export default AuthForm;
