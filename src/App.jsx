import React, { useState } from "react";
import Card from "./Card";
import style from "./App.module.css";

const App = () => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    error: "",
    errorValidation: true,
  });

  const validations = () => {
    if (
      userData.username[0] === " " ||
      userData.username.length <= 3 ||
      userData.password.length < 6
    ) {
      setErrors({
        error: "Por favor chequea que la información sea correcta",
        errorValidation: true,
      });
    } else
      setErrors({
        error: "",
        errorValidation: false,
      });
  };

  const handleInput = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setUserData({
      ...userData,
      [property]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validations();
  };
  console.log(userData);

  return (
    <>
      <div className={style.Wrapper}>
        {!errors.errorValidation && <Card userData={userData} />}

        <form className={style.Form} onSubmit={handleSubmit}>
          <div className={style.formWrapper}>
            <div className={style.inputWrapper}>
              <input
                className={style.Input}
                name="username"
                value={userData.username}
                autoComplete="off"
                placeholder="Username"
                type="text"
                onChange={handleInput}
              ></input>

              <input
                className={style.Input}
                value={userData.password}
                autoComplete="off"
                name="password"
                placeholder="Password"
                type="password"
                onChange={handleInput}
              ></input>
              <span className={style.Span}>{errors.error}</span>
              <button className={style.Button} type="submit">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default App;
