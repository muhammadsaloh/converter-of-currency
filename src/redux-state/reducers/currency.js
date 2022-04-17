const INITIAL_STATE = {
  amountCurrency: "0",
  baseCurrency: "EUR",
  targetCurrency: "USD",
};

export const CurrencyReducer = (state = INITIAL_STATE, action) => {
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
