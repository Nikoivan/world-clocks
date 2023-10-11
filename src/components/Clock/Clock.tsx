import "./Clock.css";
import { useState, useEffect } from "react";
import HourHand from "./HourHand/HourHand";

export default function Clock({
  hours,
  minutes,
  seconds,
}: {
  hours: number;
  minutes: number;
  seconds: number;
}) {
  const [state, setState] = useState(0);

  const clocks = [
    { data: ((hours % 12) + state / 3600) * 30, name: "hours" },
    { data: (minutes + state / 60) * 6, name: "minutes" },
    { data: seconds + (state % 60) * 6, name: "seconds" },
  ];

  let timeout: undefined | number;

  const loadClockProps = () => {
    setState((prev) => prev + 1);
  };

  useEffect(loadClockProps, []);
  useEffect(() => {
    timeout = window.setTimeout(loadClockProps, 1000);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [state]);

  return (
    <div className="clock">
      {clocks.map((el, id) => (
        <HourHand key={id} {...el} />
      ))}
    </div>
  );
}
