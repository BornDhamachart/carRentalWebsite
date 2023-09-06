import React from "react";
import { Form, Input, Button } from "antd";

const EmailSub = () => {
  const [form] = Form.useForm<string>();

  return (
    <div>
      <div className="font-bold mb-6">Subscription</div>
      <div className="mb-4 text-gray-500">Subscribe for latest news & updates</div>
      <Form
        form={form}
        //onFinish={onSubmitForm}
      >
        <Form.Item
          name="email"
          className="!mb-2"
          rules={[
            {
              type: "email",
              message: "Email must be formatted correctly",
            },
          ]}
        >
          <Input 
          placeholder="Enter your email address"
          />
        </Form.Item>
        <Form.Item>
          <Button
            className="bg-primary-blue text-white rounded-lg pb-2 px-4 w-full"
            htmlType="submit"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EmailSub;
