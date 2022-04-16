export const setBaseCurrency = (data) => ({
  type: "/set",
  payload: {
    amountCurrency: data.amountCurrency,
    baseCurrency: data.baseCurrency,
    targetCurrency: data.targetCurrency,
  },
});
