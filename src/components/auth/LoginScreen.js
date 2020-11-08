import React from "react";
import { useDispatch, useSelector } from "react-redux";
import validator from "validator";
import {
  startgooglelogin,
  StartRegisterWithEmailAndPassword,
  startwithemailandpassword,
} from "../../actions/auth";
import { removeError, setError } from "../../actions/ui";
import { UseForm } from "../../hooks/UseForm";


export const LoginScreen = () => {
  const dispatch = useDispatch();

  const state = useSelector((valor) => valor.ui.msgError);
  const {loading} = useSelector((valor) => valor.ui);

  const [inputValue, hanldeOnchange] = UseForm({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = inputValue;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    dispatch(startwithemailandpassword(email, password));
  };

  const handleSubmitRegister = (e) => {
    e.preventDefault();

    if (isFormValid()) {
     dispatch(StartRegisterWithEmailAndPassword(email,password,name))
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      console.log("name is required!");
      dispatch(setError("name is required!"));
      return false;
    } else if (!validator.isEmail(email)) {
      console.log("the email is not valid");
      dispatch(setError("the email is not valid"));
      return false;
    } else if (password !== password2) {
      dispatch(setError("password incorrect! please verify date "));
      if (password.length < 5) {
        dispatch(setError("password is maximun length 6"));
        return false;
      }
      return false;
    }
    dispatch(removeError());
    return true;
  };
  const handleClickRegister = () => {
    document.querySelector(".cont").classList.toggle("s-signup");
  };

  const handleGoogleLogin = () => {
    dispatch(startgooglelogin());
  };

  return (
    <div className="content">
      <div className="cont">
        <form onSubmit={handleSubmit} className="form sign-in">
          <h2>Sign In</h2>
          <label>
            <span>UserName</span>
            <input
              onChange={hanldeOnchange}
              autoComplete="off"
              type="email"
              name="email"
              value={email}
            />
          </label>
          <label>
            <span>Password</span>
            <input
              onChange={hanldeOnchange}
              type="password"
              name="password"
              value={password}
            />
          </label>
          <button disabled={loading} className="submit" type="submit">
            Sign In
          </button>

          <div className="social-media">
            <ul>
              <li onClick={handleGoogleLogin}>
                <img alt=""
                  src={process.env.PUBLIC_URL + "/assets/images/google.png"}
                />
              </li>
              <li>
                <img alt=""
                  src={process.env.PUBLIC_URL + "/assets/images/facebook.png"}
                />
              </li>
            </ul>
          </div>
        </form>

        <div className="sub-cont">
          <div
            className="img"
            style={{ backgroundImage: "url(/assets/images/background.jpg)" }}
          >
            <div className="img-text m-up">
              <h2>New here?</h2>
              <p>Sign up and discover great amount of new opportunities!</p>
            </div>
            <div className="img-text m-in">
              <h2>One of us?</h2>
              <p>
                If you already has an account, just sign in. We've missed you!
              </p>
            </div>
            <div className="img-btn" onClick={handleClickRegister}>
              <span className="m-up">Sign Up</span>
              <span className="m-in">Sign In</span>
            </div>
          </div>

          <form onSubmit={handleSubmitRegister} className="form sign-up">
            {state === null ? (
              ""
            ) : (
              <div
                style={{
                  position: "absolute",
                  top: "0rem",
                  width: "inherit",
                  left: "0rem",
                }}
                className="alert alert-danger"
                role="alert"
              >
                {state}
              </div>
            )}
            <h2>Sign Up</h2>
            <label>
              <span>Name</span>
              <input
                type="text"
                autoComplete="off"
                onChange={hanldeOnchange}
                name="name"
                value={name}
              />
            </label>
            <label>
              <span>Email</span>
              <input
                type="email"
                autoComplete="off"
                onChange={hanldeOnchange}
                name="email"
                value={email}
              />
            </label>
            <label>
              <span>Password</span>
              <input
                type="password"
                onChange={hanldeOnchange}
                name="password"
                value={password}
              />
            </label>
            <label>
              <span>Confirm Password</span>
              <input
                type="password"
                onChange={hanldeOnchange}
                name="password2"
                value={password2}
              />
            </label>
            <button type="submit" className="submit">
              Sign Up Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
