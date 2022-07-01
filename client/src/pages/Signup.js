import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import service from "../utils/service";
import ErrorMessage from "../utils/ErrorMessage";

function Signup() {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
    trigger,
    getValues,
  } = useForm({ mode: "onBlur" });

  const [checked, setChecked] = useState(true);
  const [error, setError] = useState("");

  function onSubmit(data) {
    service
      .userAPI(data)
      .then((response) => console.log(response.data))
      .catch((error) => {
        setError(error.response.data);
      });
    reset();
  }

  function closeError() {
    setError("");
  }

  return (
    <div id="register">
      {error ? <ErrorMessage message={error} onClose={closeError} /> : null}

      <Link to="/">
        <ArrowBackIcon className="backArrowIcon" fontSize="large" />
      </Link>

      <section className="bg-warning">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>Sign up</h1>
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
                      <label><b>Name: </b></label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        {...register("name", {
                          required: " Name is required",
                        })}
                        onKeyUp={() => trigger("name")}
                      />
                      {errors.name && <small> {errors.name.message} </small>}
                    </div>

                    <div className="inputs">
                    <label><b>User ID: </b></label>
                      <input
                        type="text"
                        placeholder="Enter your User ID"
                        {...register("user_id", {
                          required: "User ID is required",
                        })}
                        onKeyUp={() => trigger("user_id")}
                      />
                      {errors.user_id && (
                        <small> {errors.user_id.message} </small>
                      )}
                    </div>
                    <div className="inputs">
                    <label><b>Email: </b></label>
                      <input
                        type="text"
                        placeholder="Enter your email or mobile number"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                          },
                        })}
                        onKeyUp={() => trigger("email")}
                      />
                      {errors.email && <small> {errors.email.message} </small>}
                    </div>
                    <div className="inputs">
                    <label><b>Mobile number: </b></label>
                      <input
                        type="text"
                        placeholder="Enter your mobile number"
                        {...register("phone_number", {
                          required: "Mobile number is required",
                          pattern: {
                            value:
                              /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                            message: "Invalid Mobile number",
                          },
                        })}
                        onKeyUp={() => trigger("phone_number")}
                      />
                      {errors.phone_number && (
                        <small> {errors.phone_number.message} </small>
                      )}
                    </div>
                    <div className="inputs">
                    <label><b>Password: </b></label>
                      <input
                        type="password"
                        placeholder="Enter your new password"
                        {...register("password", {
                          required: "Password is required",
                        })}
                        onKeyUp={() => trigger("password")}
                      />
                      {errors.password && (
                        <small> {errors.password.message} </small>
                      )}
                    </div>
                    <div className="inputs">
                    <label><b>Confirm Password: </b></label>
                      <input
                        type="password"
                        placeholder="Enter your confirm password"
                        {...register("confirmPassword", {
                          validate: (value) =>
                            value === getValues().password ||
                            "Passwords do not match",
                          required: "Confirm Password is required",
                        })}
                        onKeyUp={() => trigger("confirmPassword")}
                      />
                      {errors.confirmPassword && (
                        <small> {errors.confirmPassword.message} </small>
                      )}
                    </div>
                    <label className="checkLabel">
                      <input
                        type="checkbox"
                        onChange={() => setChecked(!checked)}
                      ></input>
                      I agree all the Terms and Conditions
                    </label>
                    <button
                      className="btn"
                      disabled={!isValid || checked}
                      onClick={handleSubmit(onSubmit)}
                    >
                      CREATE AN ACCOUNT
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <p>
        All ready have an account? <Link to="/"> Login </Link>
      </p>
    </div>
  );
}

export default Signup;
