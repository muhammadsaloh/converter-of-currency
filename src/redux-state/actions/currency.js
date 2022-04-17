export const setCurrency = (data) => ({
  type: "/set",
  payload: {
    amountCurrency: data.amount,
    baseCurrency: data.from,
    targetCurrency: data.to,
  },
});

export const setBaseCurrency = (base) => ({
  type: "/set-base",
  payload: {
    baseCurrency: base,
  },
});