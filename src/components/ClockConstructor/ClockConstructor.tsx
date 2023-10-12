import { useState, ChangeEvent, FormEvent } from "react";
import "./ClockContstructor.css";
import Clock from "../Clock/Clock";
import getTimeZoneValue from "../services/getTimeZoneValue";

export default function ClockConstructor() {
  const [clocksList, setClocksList] = useState<
    {
      title: string;
      timeZoneValue: number;
      id: string;
      callback(id: string): void;
    }[]
  >([]);
  const [state, setState] = useState({
    title: "",
    timeZone: "",
  });

  const deleteClock = (id: string) => {
    setClocksList((prev) => prev.filter((el) => el.id !== id));
  };

  const createClock = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!state.title || !state.timeZone) {
      return;
    }

    setClocksList((prev) => [
      ...prev,
      ...[
        {
          title: state.title,
          timeZoneValue: getTimeZoneValue(state.timeZone),
          id: `${Math.random()}`,
          callback: deleteClock,
        },
      ],
    ]);

    setState(() => ({
      title: "",
      timeZone: "",
    }));
  };

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
              value={state.title}
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
              id="input-time-zone"
              value={state.timeZone}
              className="form__input-time-zone"
            />
          </div>
          <button onClick={createClock}>Добавить</button>
        </form>
      </div>
      <div className="clock-containerList">
        {clocksList.map((el, id) => (
          <Clock key={id} {...el} />
        ))}
      </div>
    </>
  );
}
