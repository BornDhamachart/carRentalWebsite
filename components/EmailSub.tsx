import React from "react";
import { Form, Input } from "antd";

const EmailSub = () => {
  const [form] = Form.useForm<string>();

  return (
    <div>
        <div>Subscription Email!</div>
      <Form
        form={form}
        //onFinish={onSubmitForm}
      >
        <Form.Item
          //   label="รหัสหน่วยงาน"
          name="email"
          rules={[
            {
              type: "email",
              message: "Email must be formatted correctly",
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </div>
  );
};

export default EmailSub;
