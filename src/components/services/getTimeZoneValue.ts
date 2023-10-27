export default function getTimeZoneValue(arg: number): number {
  return Math.round(arg) % 12;
}
