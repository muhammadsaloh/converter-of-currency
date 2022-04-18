import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCurrency } from "../../hooks/query/get-currency";
import currencyData from "../../assets/currency.json";
import { useDispatch, useSelector } from "react-redux";
import { setBaseCurrency } from "../../redux-state/actions/currency";
import { Card, PageHeader, Select } from "antd";
import { CardWrappper, List, ListItem, Title } from "./currency-styles";

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
    <div>
      <PageHeader
        title="Currency Page"
        subTitle={<Link to={"/"}>Home Page</Link>}
      />
      <CardWrappper>
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
            <List>
              <ListItem>
                <Title>1 USD</Title>
                <Title>=</Title>
                <Title>
                  {data?.conversion_rates.USD} {store.baseCurrency}
                </Title>
              </ListItem>
              <ListItem>
                <Title>1 EUR</Title>
                <Title>=</Title>
                <Title>
                  {data?.conversion_rates.EUR} {store.baseCurrency}
                </Title>
              </ListItem>
              <ListItem>
                <Title>1 USZ</Title>
                <Title>=</Title>
                <Title>
                  {data?.conversion_rates.UZS} {store.baseCurrency}
                </Title>
              </ListItem>
            </List>
          )}
        </Card>
      </CardWrappper>
    </div>
  );
};

export default CurrencyPage;
