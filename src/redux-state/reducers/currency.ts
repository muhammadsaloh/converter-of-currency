import { ICurrency } from "../../types/currency.types";

const INITIAL_STATE = {
  amount: "0",
  from: "EUR",
  to: "USD",
};

export const CurrencyReducer = (state: ICurrency = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case "/set":
      return {
        ...state,
        amount: action.payload.amount,
        from: action.payload.from,
        to: action.payload.to,
      };
    case "/set-base":
      return {
        ...state,
        from: action.payload.from,
      };
    default:
      return state;
  }
};
