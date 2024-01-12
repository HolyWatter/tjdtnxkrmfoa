export const changeTimeFormat = (date: string) => {
  return date.split("T")[0].replace(/-/g, ".");
};
