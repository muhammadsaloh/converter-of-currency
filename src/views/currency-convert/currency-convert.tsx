import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSearch } from "../../hooks/mutation/use-currency";
import { useDispatch, useSelector } from "react-redux";
import { setCurrency } from "../../redux-state/actions/currency";
import { PageHeader, Form, Select, Space } from "antd";
import currency from "../../assets/currency.json";
import {
  CardWrapper,
  StyledCard,
  StyledInput,
} from "./currency-convert-styles";

const HomePage = () => {
  const dispatch = useDispatch();
  const store = useSelector((state: any) => state.currency);
  const searchMutation = useSearch();

  const [allValues, setAllValues] = useState({
    amount: store.amountCurrency,
    from: store.baseCurrency,
    to: store.targetCurrency,
  });

  useEffect(() => {
    dispatch(setCurrency(allValues));
    searchMutation.mutate(allValues);
  }, [allValues]);

  const inputHandleChange = (element: any) => {
    const handler = setTimeout(() => {
      setAllValues({ ...allValues, amount: element.target.value });
    }, 250);

    return () => clearTimeout(handler);
  };

  const baseCurrencyChange = (element: string) =>
    setAllValues({ ...allValues, from: element });

  const targetCurrencyChange = (element: string) =>
    setAllValues({ ...allValues, to: element });

  return (
    <div>
      <PageHeader
        title="Convert Currency"
        subTitle={<Link to={"/currency-page"}>Daily Currency</Link>}
      />
      <CardWrapper>
        <StyledCard>
          <Form autoComplete="off" layout="vertical">
            <Space align="center">
              <Form.Item
                label="Amount"
                name="amount"
                initialValue={store.amountCurrency}
                rules={[
                  { required: true, message: "Please input your amount!" },
                ]}
              >
                <StyledInput
                  type="number"
                  placeholder="Amount"
                  onChange={inputHandleChange}
                />
              </Form.Item>

              <Form.Item
                label="From"
                name="from"
                initialValue={store.baseCurrency}
              >
                <Select placeholder="Currency" onChange={baseCurrencyChange}>
                  {currency.datas.map((item, idx) => (
                    <Select.Option key={idx} value={item}>
                      {item}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>

              <Form.Item
                label="To"
                name="to"
                initialValue={store.targetCurrency}
              >
                <Select placeholder="Currency" onChange={targetCurrencyChange}>
                  {currency.datas.map((item, idx) => (
                    <Select.Option key={idx} value={item}>
                      {item}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Space>
            {searchMutation.error ? (
              <h1>Error</h1>
            ) : searchMutation.isLoading ? (
              <h1>Loading...</h1>
            ) : (
              <React.Fragment>
                <h1>
                  {store.amountCurrency} {store.baseCurrency} =
                </h1>
                <br />
                <h1>
                  {searchMutation.data?.conversion_result}{" "}
                  {store.targetCurrency}
                </h1>
              </React.Fragment>
            )}
          </Form>
        </StyledCard>
      </CardWrapper>
    </div>
  );
};

export default HomePage;
