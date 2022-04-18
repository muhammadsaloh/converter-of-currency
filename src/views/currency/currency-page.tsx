import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCurrency } from "../../services/requests/get-currency";
import currencyData from "../../assets/currency.json";
import { useDispatch, useSelector } from "react-redux";
import { setBaseCurrency } from "../../redux-state/actions/currency";
import { Card, PageHeader, Select } from "antd";
import "./currency-page.css";

const CurrencyPage = () => {
  const dispatch = useDispatch();
  const store = useSelector((state: any) => state.currency);
  const [currency, setCurrency] = useState(store.baseCurrency);
  const { data, loading, error } = useCurrency(store.baseCurrency);

  const HandleChange = (currency: string) => setCurrency(currency);

  useEffect(() => {
    dispatch(setBaseCurrency(currency));
  }, [currency]);

  return (
    <div className="currency_page">
      <PageHeader
        className="site-page-header"
        title="Currency Page"
        subTitle={<Link to={"/"}>Home Page</Link>}
      />
      <div className="currency_page-card_wrapper">
        <Card
          title="Currency"
          extra={
            <Select
              placeholder="Currency"
              defaultValue={store.baseCurrency}
              onChange={HandleChange}
            >
              {currencyData?.datas.map((item, idx) => (
                <Select.Option key={idx} value={item}>
                  {item}
                </Select.Option>
              ))}
            </Select>
          }
        >
          {error ? (
            <h1>Error</h1>
          ) : loading ? (
            <h1>Loading...</h1>
          ) : (
            <ul className="currency_page-card_wrapper-list">
              <li className="currency_page-card_wrapper-list-item">
                <h1>1 USD</h1>
                <h1>=</h1>
                <h1>
                  {data?.conversion_rates.USD} {store.baseCurrency}
                </h1>
              </li>
              <li className="currency_page-card_wrapper-list-item">
                <h1>1 EUR</h1>
                <h1>=</h1>
                <h1>
                  {data?.conversion_rates.EUR} {store.baseCurrency}
                </h1>
              </li>
              <li className="currency_page-card_wrapper-list-item">
                <h1>1 USZ</h1>
                <h1>=</h1>
                <h1>
                  {data?.conversion_rates.UZS} {store.baseCurrency}
                </h1>
              </li>
            </ul>
          )}
        </Card>
      </div>
    </div>
  );
};

export default CurrencyPage;
