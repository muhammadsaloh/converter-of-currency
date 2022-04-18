export type ICurrency = {
  amount: number | string;
  from: string;
  to: string;
};

export type ICurrencyRedux = {
  amountCurrency: string;
  baseCurrency: string;
  targetCurrency: string;
};
