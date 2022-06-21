import { SET_WEATHER } from "../action";
import { combineReducers } from "redux";

export const weather = (state = [], action) => {
  console.log("----from reducer ---", action);

  switch (action.type) {
    case SET_WEATHER:
      return action.item;

    default:
      return state;
  }
};

const rootReducer = combineReducers({ weather });

export default rootReducer;
