import { ICurrencyRedux } from "../../types/currency.types";
import { IAction } from "../../types/redux.types";

const initialState = {
  amountCurrency: "0",
  baseCurrency: "EUR",
  targetCurrency: "USD",
} as ICurrencyRedux;

export const CurrencyReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case "/set":
      return {
        ...state,
        amountCurrency: action.payload.amountCurrency,
        baseCurrency: action.payload.baseCurrency,
        targetCurrency: action.payload.targetCurrency,
      };
    case "/set-base":
      return {
        ...state,
        baseCurrency: action.payload.baseCurrency,
      };
    default:
      return state;
  }
};
