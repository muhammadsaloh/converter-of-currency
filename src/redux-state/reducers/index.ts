import { combineReducers } from "redux";
import { CurrencyReducer } from "./currency";
import { IAction, IState } from "../../types/redux.types";

const appReducer = combineReducers({
  currency: CurrencyReducer,
});

const rootReducer = (state: IState | undefined, action: IAction) => {
  return appReducer(state, action);
};

export default rootReducer;
