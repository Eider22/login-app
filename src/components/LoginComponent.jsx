import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../contexts/authContext";
import {
  userSchema,
  passwordSchema,
} from "../utils/validationSchemas/loginSchemas";

const LoginComponent = () => {
  const { login, authError } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const enviarDatos = ({ user, password }) => {
    console.log("desde el componente", user, password);
    login(user, password);
  };

  return (
    <>
      <br />
      <br />
      <br />
      <div className="container text-center">
        <div className="row align-items-center">
          <div className="col-4"></div>
          <div className="col-4">
            <br />
            <h1>INICIAR SESION</h1>
            {authError && (
              <span id="incorrect-credentials">Credenciales erroneas, intentelo de nuevo</span>
            )}
            <br />
            <form className="container" onSubmit={handleSubmit(enviarDatos)}>
              <div className="row mt-2">
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="user">Nombre de usuario</label>
                    <input
                      type="text"
                      className="form-control"
                      id="user"
                      placeholder="Usuario"
                      {...register("user", userSchema)}
                    />
                     {/* TODO: Separate the error into a component */}
                    {errors.user && (
                      <span className="text-danger text-small d-block mb-2">
                        {errors.user.message}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="password">Contraseña</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Contraseña"
                      {...register("password", passwordSchema)}
                    />
                     {/* TODO: Separate the error into a component */}
                    {errors.password && (
                      <span className="text-danger text-small d-block mb-2">
                        {errors.password.message}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="row mt-5">
                <div className="col">
                  <button type="submit" className="btn btn-primary">
                    Iniciar Sesion
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </>
  );
};

export default LoginComponent;
