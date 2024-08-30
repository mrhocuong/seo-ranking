import React from "react";
import { Form, Input, Button } from "antd";

interface SeoRankingFormProps {
  onSubmit: (values: { targetUrl: string; keyword: string }) => void;
  loading: boolean;
}

const SeoRankingForm: React.FC<SeoRankingFormProps> = ({
  onSubmit,
  loading,
}) => {
  const [form] = Form.useForm();

  return (
    <Form form={form} onFinish={onSubmit} layout="vertical">
      <Form.Item
        name="targetUrl"
        label="Target URL"
        rules={[
          {
            required: true,
            type: "url",
            message: "Please enter a valid URL",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="keyword"
        label="Keyword"
        rules={[{ required: true, message: "Please enter a keyword" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" block loading={loading}>
          Search
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SeoRankingForm;
