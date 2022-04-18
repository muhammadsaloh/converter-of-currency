import { useQuery } from "react-query";
import { ICurrency } from "../../types/currency.types";
import { request } from "../../services/api";

export const useConvert = (currency: ICurrency) =>
  useQuery("currency", () =>
    request
      .get(`/pair/${currency.from}/${currency.to}/${currency.amount || 0}/`)
      .then((res) => res.data)
  );

export const useCurrency = (from: string) =>
  useQuery("currency", () =>
    request.get(`/latest/${from}/`).then((res) => res.data)
  );