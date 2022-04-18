import { ICurrency } from "../../types/currency.types";

export const setCurrency = (data: ICurrency) => ({
  type: "/set",
  payload: {
    amount: data.amount,
    from: data.from,
    to: data.to,
  },
});

export const setBaseCurrency = (from: string) => ({
  type: "/set-base",
  payload: {
    from,
  },
});
