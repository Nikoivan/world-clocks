export type HourHandProps = {
  data: number;
  name: string;
};

export default function HourHand({ data, name }: HourHandProps) {
  return (
    <div className={name + "-container"}>
      <div style={{ transform: `rotate(${data}deg)` }} className={name}></div>
    </div>
  );
}
