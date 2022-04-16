import { combineReducers } from "redux";
import { CurrencyReducer } from "./currency";

const appReducer = combineReducers({
  currency: CurrencyReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
