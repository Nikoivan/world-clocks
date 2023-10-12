import "./Clock.css";
import { useState, useEffect } from "react";
import HourHand from "./HourHand/HourHand";
import getClockOptions from "../services/getClockOptions";

export default function Clock({
  title,
  timeZoneValue,
  id,
  callback,
}: {
  title: string;
  timeZoneValue: number;
  id: string;
  callback: (arg: string) => void;
}) {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  let timeout: number;

  const clockProps = [
    { data: hours, name: "hours" },
    { data: minutes, name: "minutes" },
    { data: seconds, name: "seconds" },
  ];

  const getClockProps = () => {
    const { hours, minutes, seconds } = getClockOptions(timeZoneValue);
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
  };

  useEffect(getClockProps, []);
  useEffect(() => {
    timeout = window.setTimeout(() => {
      getClockProps();
    }, 1000);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [seconds]);

  return (
    <div className="container">
      <div className="container__wrap">
        <h3 className="container__title">{title}</h3>
        <span className="container__close-btn" onClick={() => callback(id)}>
          &#10060;
        </span>
      </div>
      <div className="clock">
        {clockProps.map((el, id) => (
          <HourHand key={id} {...el} />
        ))}
      </div>
    </div>
  );
}
