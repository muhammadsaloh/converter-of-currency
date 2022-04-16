import React from "react";
import { PageHeader, Card, Input, Form, Select, Space, Button } from "antd";
import { SwapOutlined } from "@ant-design/icons";
import "./home-page.css";

const HomePage = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  return (
    <div className="home_page">
      <PageHeader
        className="site-page-header"
        title="Home Page"
        subTitle="You can canvert currency"
      />
      <div className="home_page-card_wrapper">
        <Card
          className="home_page-card_wrapper-card"
          title="Default size card"
        >
          <Form onFinish={onFinish} autoComplete="off" layout="vertical">
            <Space align="center">
              <Form.Item
                label="Amount"
                name="amount"
                rules={[
                  { required: true, message: "Please input your amount!" },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item label="From" name="from">
                <Select>
                  <Select.Option>1</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item label="Convert">
                <Button htmlType="submit" type="primary" className="button">
                  <SwapOutlined />
                </Button>
              </Form.Item>

              <Form.Item label="To" name="to">
                <Select>
                  <Select.Option>2</Select.Option>
                </Select>
              </Form.Item>
            </Space>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;
