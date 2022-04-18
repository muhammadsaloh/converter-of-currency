import { ICurrency } from "../../types/currency.types";

export const setCurrency = (data: ICurrency) => ({
  type: "/set",
  payload: {
    amountCurrency: data.amount,
    baseCurrency: data.from,
    targetCurrency: data.to,
  },
});

export const setBaseCurrency = (from: string) => ({
  type: "/set-base",
  payload: {
    baseCurrency: from,
  },
});
