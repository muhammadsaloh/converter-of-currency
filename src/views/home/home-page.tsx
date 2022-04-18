import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useConvert } from "../../hooks/query/get-currency";
import { useDispatch, useSelector } from "react-redux";
import { setCurrency } from "../../redux-state/actions/currency";
import { PageHeader, Card, Input, Form, Select, Space } from "antd";
import currency from "../../assets/currency.json";
import "./home-page.css";

const HomePage = () => {
  const dispatch = useDispatch();
  const store = useSelector((state: any) => state.currency);

  const [allValues, setAllValues] = useState({
    amount: store.amountCurrency,
    from: store.baseCurrency,
    to: store.targetCurrency,
  });

  const { data, error, loading } = useConvert(store);

  useEffect(() => {
    dispatch(setCurrency(allValues));
  }, [allValues]);

  const inputHandleChange = (element: any) => {
    const handler = setTimeout(
      () => setAllValues({ ...allValues, amount: element.target.value }),
      250
    );

    return () => clearTimeout(handler);
  };

  const baseCurrencyChange = (element: string) =>
    setAllValues({ ...allValues, from: element });

  const targetCurrencyChange = (element: string) =>
    setAllValues({ ...allValues, to: element });

  return (
    <div className="home_page">
      <PageHeader
        className="site-page-header"
        title="Home Page"
        subTitle={<Link to={"/currency-page"}>Currency Page</Link>}
      />
      <div className="home_page-card_wrapper">
        <Card className="home_page-card_wrapper-card">
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
                <Input
                  className="home_page-card_wrapper-card-input"
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
            {error ? (
              <h1>Error</h1>
            ) : loading ? (
              <h1>Loading...</h1>
            ) : (
              <React.Fragment>
                <h1>
                  {store.amountCurrency} {store.baseCurrency} =
                </h1>
                <br />
                <h1>
                  {data?.conversion_result} {store.targetCurrency}
                </h1>
              </React.Fragment>
            )}
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;
