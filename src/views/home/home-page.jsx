import React, { useState } from "react";
import { useConvert } from "../../services/requests/get-currency";
import { PageHeader, Card, Input, Form, Select, Space } from "antd";
import currency from "../../assets/currency.json";
import "./home-page.css";

const HomePage = () => {
  const [allValues, setAllValues] = useState({
    amount: 0,
    from: "EUR",
    to: "USD",
  });

  const { data, loading } = useConvert(
    allValues.amount,
    allValues.from,
    allValues.to
  );

  const inputHandleChange = (element) =>
    setAllValues({ ...allValues, amount: element.target.value });

  const baseCurrencyChange = (element) =>
    setAllValues({ ...allValues, from: element });

  const targetCurrencyChange = (element) =>
    setAllValues({ ...allValues, to: element });

  return (
    <div className="home_page">
      <PageHeader
        className="site-page-header"
        title="Home Page"
        subTitle="You can canvert currency"
      />
      <div className="home_page-card_wrapper">
        <Card className="home_page-card_wrapper-card">
          <Form autoComplete="off" layout="vertical">
            <Space align="center">
              <Form.Item
                label="Amount"
                name="amount"
                initialValue={0}
                rules={[
                  { required: true, message: "Please input your amount!" },
                ]}
              >
                <Input placeholder="Amount" onChange={inputHandleChange} />
              </Form.Item>

              <Form.Item label="From" name="from" initialValue="USD">
                <Select placeholder="Currency" onChange={baseCurrencyChange}>
                  {currency.datas.map((item, idx) => (
                    <Select.Option key={idx} value={item}>
                      {item}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>

              <Form.Item label="To" name="to" initialValue="EUR">
                <Select placeholder="Currency" onChange={targetCurrencyChange}>
                  {currency.datas.map((item, idx) => (
                    <Select.Option key={idx} value={item}>
                      {item}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Space>
            {loading ? (
              <h1>Loading...</h1>
            ) : (
              <>
                <h1>
                  {allValues.amount} {allValues.from} =
                </h1>
                <br />
                <h1>
                  {data?.conversion_result} {allValues.to}
                </h1>
              </>
            )}
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;
