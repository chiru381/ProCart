import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import service from "../utils/service";
import ErrorMessage from "../utils/ErrorMessage";

function Login() {
  const {
    register,
    formState: { errors },
    trigger,
    handleSubmit,
    reset,
  } = useForm({ mode: "onBlur" });

  const [error, setError] = useState("");

  function handleClick(data) {
    service
      .loginAPI(data)
      .then((response) => console.log(response.data))
      .catch((error) => setError(error.response.data));
    reset();
  }

  function closeError() {
    setError("");
  }

  return (
    <div id="login">
      {error ? <ErrorMessage message={error} onClose={closeError} /> : null}

      <Link to="/signup">
        <ArrowBackIcon className="backArrowIcon" fontSize="large" />
      </Link>

      <section className="bg-warning">
        <div className="container">
          <div className="row">
            <div className="col">
             <h1>Login</h1>
            </div>
          </div>
        </div>
      </section>
      
      <section className="m-auto">
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-5">
              <div className="card">
                <div className="card-header">
                  {/* <pre>{JSON.stringify(user)}</pre> */}
                </div>
                <div className="card-body">
      <form>
        <div className="inputs">
          <label>Email</label>
          <input
            type="text"
            placeholder="Enter your Email"
            {...register("email", { required: "email is required" })}
            onKeyUp={() => trigger("email")}
          />
          {errors.email && <small>{errors.email.message}</small>}
        </div>
        <div className="inputs">
          <label>Password </label>
          <input
            type="password"
            placeholder="Enter your Password"
            {...register("password", { required: "Password is required" })}
            onKeyUp={() => trigger("password")}
          />
          {errors.password && <small>{errors.password.message}</small>}
        </div>
        <span>Forgot Password ?</span>
        <button className="btn" onClick={handleSubmit(handleClick)}>
          <Link to="/dashboard">LOGIN</Link>
        </button>
      </form>
      </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <p>
        Not a member? <Link to="/signup"> Signup now </Link>
      </p>
    </div>
  );
}

export default Login;
