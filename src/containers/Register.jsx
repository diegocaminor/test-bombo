import React, { useState } from "react";
import moment from "moment";

import "../assets/styles/components/Register.css";

const Register = (props) => {
  const [form, setValues] = useState({
    firstName: "",
    lastName: "",
    birthdate: "",
    password: "",
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Información enviada: ${JSON.stringify(form)}`);
    console.log(form.birthdate);
    let dateFormated = moment(form.birthdate).format("MMM Do YY");
    alert(`Fecha formateada con momentjs: ${dateFormated}`);
  };

  return (
    <>
      <section className="register">
        <section className="register__container">
          <h2 className="register__title">Regístrate</h2>
          <form className="register__container--form" onSubmit={handleSubmit}>
            <input
              name="firstName"
              type="text"
              className="input"
              placeholder="Nombre"
              onChange={handleInput}
              required
            />
            <br />
            <input
              name="lastName"
              type="text"
              className="input"
              placeholder="Apellidos"
              onChange={handleInput}
              required
            />
            <br />
            <input
              name="birthdate"
              type="date"
              className="input"
              placeholder="Fecha nacimiento"
              onChange={handleInput}
              required
            />
            <br />
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Contraseña"
              onChange={handleInput}
              required
            />
            <br />
            <button type="submit" className="button">
              Enviar form
            </button>
          </form>
        </section>
      </section>
    </>
  );
};

export default Register;
