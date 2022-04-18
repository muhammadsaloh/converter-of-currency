import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useUSD, useEUR, useUZS } from "../../hooks/mutation/use-currency";
import currencyData from "../../assets/currency.json";
import { useDispatch, useSelector } from "react-redux";
import { setBaseCurrency } from "../../redux-state/actions/currency";
import { Card, PageHeader, Select } from "antd";
import { CardWrappper, List, ListItem, Title } from "./currency-styles";

const CurrencyPage = () => {
  const dispatch = useDispatch();
  const store = useSelector((state: any) => state.currency);
  const usdMutation = useUSD();
  const eurMutation = useEUR();
  const uzsMutation = useUZS();

  const HandleChange = (currency: string) => {
    dispatch(setBaseCurrency(currency));
  };

  useEffect(() => {
    usdMutation.mutate(store.baseCurrency);
    eurMutation.mutate(store.baseCurrency);
    uzsMutation.mutate(store.baseCurrency);
  }, [store.baseCurrency]);

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
          {usdMutation.error ? (
            <h1>Error</h1>
          ) : usdMutation.isLoading ? (
            <h1>Loading...</h1>
          ) : (
            <List>
              <ListItem>
                <Title>1 USD</Title>
                <Title>=</Title>
                <Title>
                  {usdMutation.data?.conversion_result} {store.baseCurrency}
                </Title>
              </ListItem>
              <ListItem>
                <Title>1 EUR</Title>
                <Title>=</Title>
                <Title>
                  {eurMutation.data?.conversion_result} {store.baseCurrency}
                </Title>
              </ListItem>
              <ListItem>
                <Title>1 USZ</Title>
                <Title>=</Title>
                <Title>
                  {uzsMutation.data?.conversion_result} {store.baseCurrency}
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
