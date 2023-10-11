import { useState, ChangeEvent, useEffect } from "react";
import "./ClockContstructor.css";
import Clock from "../Clock/Clock";
import getClockOptions from "../services/getClockOptions";

export default function ClockConstructor() {
  const [state, setState] = useState({
    title: "",
    timeZone: "",
  });

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setState((prevState) => ({ ...prevState, [name]: `${value}` }));
  };

  return (
    <>
      <div className="clock-container">
        <form className="container__form">
          <div className="form__wrap">
            <label htmlFor="input-title" className="form__label-title">
              Название
            </label>
            <input
              onChange={onChangeHandler}
              name="title"
              id="input-title"
              type="text"
              className="form__input-title"
            />
          </div>
          <div className="form__wrap">
            <label htmlFor="input-time-zone" className="form__label-time-zone">
              Временная зона
            </label>
            <input
              onChange={onChangeHandler}
              name="timeZone"
              type="text"
              className="form__input-time-zone"
            />
          </div>
          <button>Добавить</button>
        </form>
      </div>
      <Clock {...getClockOptions()} />
    </>
  );
}
