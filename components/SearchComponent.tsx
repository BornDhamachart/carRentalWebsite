import React from "react";
import { Button, Form, Input, Select } from "antd";
import { manufacturers, yearsOfProduction, fuels, searchInitialValue } from "@/constants";
import { FilterProps } from "@/types";

interface SearchComponentProps {
  setFilters: React.Dispatch<React.SetStateAction<FilterProps>>;
}

const SearchComponent = ({ setFilters }: SearchComponentProps) => {
  const [form] = Form.useForm<FilterProps>();

  //Form handling
  const onSubmitForm = (data: FilterProps) => {
    setFilters((prevState) => ({
      ...prevState,
      make: data.make,
      year: data.year,
      model: data.model,
      fuel: data.fuel,
    }));
    console.log("Search data", data);
  };

  const onReset = () => {
    form.setFieldsValue(searchInitialValue);
    setFilters(searchInitialValue);
  };

  return (
    <Form
      form={form}
      preserve={false}
      initialValues={searchInitialValue}
      onFinish={onSubmitForm}
      autoComplete="off"
      className="px-16 mt-6"
    >
      <div className="flex w-full gap-6">
        <Form.Item name="make" className="w-1/2">
          <Select
            allowClear
            showSearch
            placeholder="Manufacturer"
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            optionFilterProp="children"
            options={manufacturers.map((r: string) => ({
              value: r,
              label: r,
            }))}
          ></Select>
        </Form.Item>
        <Form.Item name="model" className="w-1/2">
          <Input placeholder="ex.Camry, Corolla, ..."></Input>
        </Form.Item>
      </div>

      <div className="flex w-full gap-6">
        <Form.Item name="year" className="w-1/2">
          <Select
            allowClear
            showSearch
            placeholder="Manufacturer"
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            optionFilterProp="children"
            options={yearsOfProduction.map((r: any) => ({
              value: r.value,
              label: r.title,
            }))}
          ></Select>
        </Form.Item>
        <Form.Item name="fuel" className="w-1/2">
          <Select
            allowClear
            showSearch
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            optionFilterProp="children"
            options={fuels.map((r: any) => ({
              value: r.value,
              label: r.title,
            }))}
          ></Select>
        </Form.Item>
      </div>
      <div className="flex justify-end w-full gap-4 pt-2">
        <Form.Item>
          <Button
            htmlType="button"
            onClick={onReset}
            className="bg-white text-black"
          >
            Reset
          </Button>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="bg-primary-blue text-white"
          >
            Search
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};

export default SearchComponent;
