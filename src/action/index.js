export const SET_WEATHER = "SET_WEATHER";

export const SetWeather = (item) => {
  console.log("-------- from action ------", item);
  return {
    type: "SET_WEATHER",
    item,
  };
};
