import { useForm } from "react-hook-form";
import {
  userSchema,
  passwordSchema,
} from "../utils/validationSchemas/loginSchemas";

const LoginComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="user" className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            id="user"
            {...register("user", userSchema)}
          />
          {/* TODO: Separar el error en un componente */}
          {errors.user && (
            <span className="text-danger text-small d-block mb-2">
              {errors.user.message}
            </span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            {...register("password", passwordSchema)}
          />
          {/* TODO: Separar el error en un componente */}
          {errors.password && (
            <span className="text-danger text-small d-block mb-2">
              {errors.password.message}
            </span>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default LoginComponent;
