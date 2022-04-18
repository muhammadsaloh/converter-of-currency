import { useMutation } from "react-query";
import { ICurrency } from "../../types/currency.types";
import { request } from "../../services/api";

export const useSearch = () =>
  useMutation((filters: ICurrency) =>
    request
      .get(`/pair/${filters.from}/${filters.to}/${filters.amount || 0}/`)
      .then((res) => res.data)
  );


export const useUSD = () =>
  useMutation((from: string) =>
    request.get(`/pair/USD/${from}/1`).then((res) => res.data)
  );

export const useEUR = () =>
  useMutation((from: string) =>
    request.get(`/pair/EUR/${from}/1`).then((res) => res.data)
  );

export const useUZS = () =>
  useMutation((from: string) =>
    request.get(`/pair/UZS/${from}/1`).then((res) => res.data)
  );