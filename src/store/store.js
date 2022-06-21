import { createStore } from "redux";
import rootReducer from "../reducers/index";

const store = createStore(rootReducer);
console.log("------from store----", store);

export default store;
