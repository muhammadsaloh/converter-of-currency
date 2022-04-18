export type IAction = {
  type: string;
  payload: {
    amountCurrency: string;
    baseCurrency: string;
    targetCurrency: string;
  };
  key: string;
};

export type IState = {
  currency: {
    amountCurrency: string;
    baseCurrency: string;
    targetCurrency: string;
  };
};
