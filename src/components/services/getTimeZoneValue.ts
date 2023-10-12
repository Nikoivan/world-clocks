export default function getTimeZoneValue(arg: string): number {
  const formattedArg = arg.toLowerCase();
  if (formattedArg.includes("moscow") || formattedArg.includes("москва")) {
    return 0;
  } else if (
    formattedArg.includes("warsaw") ||
    formattedArg.includes("варшава")
  ) {
    return -1;
  } else if (
    formattedArg.includes("london") ||
    formattedArg.includes("лондон")
  ) {
    return -2;
  } else if (
    formattedArg.includes("tbilisi") ||
    formattedArg.includes("тбилиси")
  ) {
    return 1;
  } else if (
    formattedArg.includes("yekaterinburg") ||
    formattedArg.includes("екатеринбург")
  ) {
    return 2;
  } else {
    return 0;
  }
}
