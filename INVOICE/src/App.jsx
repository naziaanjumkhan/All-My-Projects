import {
  Button,
  DatePicker,
  Divider,
  Drawer,
  Form,
  Input,
  InputNumber,
  Select,
  Space,
  Tooltip,
} from "antd";
import { MinusIcon, Plus, PlusIcon, Printer } from "lucide-react";
import "animate.css";
import { useState } from "react";
import moment from "moment";
import { useForm } from "antd/es/form/Form";

const App = () => {
  const [open, setOpen] = useState(false);
  const [invoice, setInvoice] = useState(null);
  const [form] = useForm();

  const handleClose = () => {
    setOpen(false);
    form.resetFields();
  };

  const formSchema = [
    {
      label: "Invoice no",
      name: "invoiceNo",
      required: true,
    },
    {
      label: "Date",
      name: "date",
      required: true,
    },
    {
      label: "Company website",
      name: "companyWebsite",
      required: true,
    },
    {
      label: "Company name",
      name: "companyName",
      required: true,
    },
    {
      label: "Company email",
      name: "companyEmail",
      required: true,
    },
    {
      label: "Company address",
      name: "companyAddress",
      required: true,
    },
    {
      label: "Company state",
      name: "companyState",
      required: true,
    },
    {
      label: "Company country",
      name: "companyCountry",
      required: true,
    },
    {
      label: "Company pincode",
      name: "companyPincode",
      required: true,
    },
    {
      label: "Company gst",
      name: "companyGst",
      required: true,
    },
    {
      label: "Customer name",
      name: "customerName",
      required: true,
    },
    {
      label: "Customer company name",
      name: "customerCompanyName",
      required: true,
    },
    {
      label: "Customer email",
      name: "customerEmail",
      required: true,
    },
    {
      label: "Customer address",
      name: "customerAddress",
      required: true,
    },
    {
      label: "Customer state",
      name: "customerState",
      required: true,
    },
    {
      label: "Customer country",
      name: "customerCountry",
      required: true,
    },
    {
      label: "Customer pincode",
      name: "customerPincode",
      required: true,
    },
    {
      label: "Choose payment method",
      name: "paymentMethod",
      required: true,
      options: [
        {
          label: "Bank",
          value: "bank",
        },
        {
          label: "Upi",
          value: "upi",
        },
      ],
    },
    {
      label: "GST Rate (%)",
      name: "gstRate",
      required: true,
    },

    {
      label: "Transaction id",
      name: "transactionId",
      required: true,
    },
    {
      label: "Due date",
      name: "dueDate",
      required: true,
    },
  ];
  const generateInvoice = (values) => {
    values.date = moment(values.date).format("DD MMM YYYY");
    values.dueDate = moment(values.dueDate).format("DD MMM YYYY");
    values.products =
      values.products?.map((product) => ({
        ...product,
        amount: product.qty * product.rate,
      })) || [];
    values.subtotal = values.products.reduce(
      (sum, item) => sum + item.amount,
      0,
    );
    values.gstRate = Number(values.gstRate) || 0
    values.tax = (values.subtotal * values.gstRate) / 100;
    values.total = values.subtotal + values.tax;
    console.log("Final Invoice:", values);
    setInvoice(values);
    handleClose();
  };

  return (
    <div className="bg-gray-200 min-h-screen print:min-h-0 py-6 print:bg-white print:py-0">
      {/**Printer Divivsion */}
    <div className="mx-auto bg-white w-[210mm] h-[297mm] p-[15mm] shadow-lg print:shadow-none print:m-0 overflow-hidden">
        {invoice && (
          <div className="text-sm text-gray-800">
            {/* Header */}
            <div className="flex justify-between items-start border-b pb-6">
              <div>
                <h1 className="text-2xl font-bold tracking-wide text-gray-800">
                  INVOICE
                </h1>
                <p className="text-sm text-gray-500 mt-2">
                  <strong>Invoice #:</strong> Invoice #INV
                  {invoice?.invoiceNo || "0001"}
                </p>
                <p>
                  <strong>Date:</strong> {invoice?.date || "01 Jan 2026"}
                </p>
                <p>
                  <strong>Due Date:</strong> {invoice.dueDate}
                </p>
              </div>

              <div className="text-right">
                <h2 className="font-semibold text-lg text-gray-800">
                  {invoice?.companyName || "ABC Solution Pvt Ldt"}
                </h2>
                <p className="text-sm text-gray-500 mt-2">
                  {invoice?.companyWebsite || "www.company.com"}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  {invoice?.companyAddress || "123 businness Street"}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  {invoice?.companyState || "Telangana"},{" "}
                  {invoice?.companyCountry || "US"}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  {invoice?.companyPincode || "500002"}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  {invoice?.companyEmail || "company@gmmail.com"}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  GST: {invoice?.companyGst || "1%"}
                </p>
              </div>
            </div>

            {/* Billing Section */}
            <div className="flex justify-between mt-6">
              <div>
                <h3 className="font-semibold mb-2">Bill To:</h3>
                <p className="text-sm font-medium text-gray-500 mt-2">
                  {invoice?.customerName || "ABZ"}
                </p>
                <p className="text-sm font-medium text-gray-500 mt-2">
                  {invoice?.customerCompanyName || "ABZ company Ldt"}
                </p>
                <p className="text-sm text-gray-500 ">
                  {invoice?.customerAddress || "457 server road"}
                </p>
                <p className="text-sm text-gray-500 ">
                  {invoice?.customerState || "MUmbai"},{" "}
                  {invoice?.customerCountry || "India"}
                </p>
                <p className="text-sm text-gray-500 ">
                  {invoice?.customerPincode || "12345"}
                </p>
                <p className="text-sm text-gray-500 ">
                  {invoice?.customerEmail || "customeremail.com"}
                </p>
              </div>

              <div className="text-right">
                <h3 className="font-semibold mb-2">Payment Details:</h3>
                <p className="text-sm text-gray-500 ">
                  <strong>Payment Method:</strong>{" "}
                  {invoice?.paymentMethod || "Bank"}
                </p>
                <p className="text-sm text-gray-500 ">
                  <strong>Transaction ID:</strong>{" "}
                  {invoice?.transactionId || "PAY1234"}
                </p>
                <p className="text-sm text-gray-500 ">
                  <strong>Due Date:</strong> {invoice?.dueDate || "10 Jan 2026"}
                </p>
              </div>
            </div>

            {/* Products Table */}
            <div className="mt-8">
              <table className="w-full border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border p-2 text-left">Description</th>
                    <th className="border p-2 text-center">Qty</th>
                    <th className="border p-2 text-center">Rate</th>
                    <th className="border p-2 text-right">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {invoice?.products.map((product, index) => (
                    <tr key={index}>
                      <td className="border p-2">{product.item}</td>
                      <td className="border p-2 text-center">{product.qty}</td>
                      <td className="border p-2 text-center">
                        ₹{product.rate.toLocaleString()}
                      </td>
                      <td className="border p-2 text-right">
                        ₹{product.amount.toLocaleString()}
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td className="p-3 border">
                      GST ({invoice?.gstRate || 0}%)
                    </td>
                    <td className="p-3 border text-right">-</td>
                    <td className="p-3 border text-right">-</td>
                    <td className="p-3 border text-right">
                      ₹{invoice?.tax || 0}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Totals */}
            <div className="flex justify-end mt-6">
              <div className="w-1/3 text-sm">
                <div className="flex justify-between py-1">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="text-gray-600">
                    ₹{invoice.subtotal.toLocaleString() || 0}
                  </span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-gray-600">Tax:</span>
                  <span className="text-gray-600">
                    ₹{invoice.tax.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-t font-bold text-base">
                  <span className="text-gray-600">Total:</span>
                  <span className="text-gray-600">
                    ₹{invoice.total.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-12 text-xs text-gray-500 border-t pt-4">
              <p>Thank you for your business.</p>
              <p>This is a system generated invoice.</p>
            </div>
          </div>
        )}
      </div>

      {/*End of Printer Dividon */}
      <div className="print:hidden fixed -translate-y-1/2 top-1/2 left-0 bg-white rounded-r-lg p-4 flex flex-col gap-6 shadow-lg">
        <Tooltip title="Create a new invoice" className="!print:hidden">
          <button
            onClick={(e) => setOpen(true)}
            className="bg-blue-500 text-white p-2 rounded hover:scale-105 transition duration-400 active:scale-80"
          >
            <Plus />
          </button>
        </Tooltip>

        <button
          onClick={() => window.print()}
          className="bg-blue-500 text-white p-2 rounded hover:scale-105 transition duration-400 active:scale-80"
        >
          <Printer />
        </button>
      </div>
      <Drawer
        open={open}
        onClose={handleClose}
        title="Create a new invoice"
        size={720}
      >
        <div>
          <Form
            form={form}
            layout="vertical"
            onFinish={generateInvoice}
            className="grid grid-cols-2 gap-2"
          >
            {formSchema.map((item, index) => {
              if (item.name === "date" || item.name === "dueDate") {
                return (
                  <Form.Item
                    key={index}
                    label={
                      <h2 className="font-medium text-base">{item.label}</h2>
                    }
                    name={item.name}
                    rules={[{ required: item.required }]}
                  >
                    <DatePicker size="large" className="w-full" />
                  </Form.Item>
                );
              }

              if (item.name === "paymentMethod") {
                return (
                  <Form.Item
                    key={index}
                    label={
                      <h2 className="font-medium text-base">{item.label}</h2>
                    }
                    name={item.name}
                    rules={[{ required: item.required }]}
                  >
                    <Select
                      size="large"
                      className="w-full"
                      options={item.options}
                      placeholder="choose payment method"
                    ></Select>
                  </Form.Item>
                );
              }

              return (
                <Form.Item
                  key={index}
                  label={
                    <h2 className="font-medium text-base">{item.label}</h2>
                  }
                  name={item.name}
                  rules={[{ required: item.required }]}
                >
                  <Input size="large" />
                </Form.Item>
              );
            })}

            {/**oh */}
            <Divider className="col-span-2">Product Details</Divider>
            <Form.List name="products">
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, ...restField }) => (
                    <Space
                      key={key}
                      style={{ display: "flex", marginBottom: 8 }}
                      align="baseline"
                      className="col-span-2"
                    >
                      <Form.Item
                        {...restField}
                        name={[name, "item"]}
                        rules={[
                          { required: true, message: " ITem is Missing" },
                        ]}
                      >
                        <Input placeholder="Item" />
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        name={[name, "qty"]}
                        rules={[
                          { required: true, message: "Quantity is missing" },
                        ]}
                      >
                        <InputNumber
                          size="large"
                          placeholder="Quantity"
                          className="!w-full"
                        />
                      </Form.Item>

                      <Form.Item
                        {...restField}
                        name={[name, "rate"]}
                        rules={[{ required: true, message: "Rate is missing" }]}
                      >
                        <InputNumber
                          placeholder="Rate"
                          className="!w-full"
                          size="large"
                        />
                      </Form.Item>

                      <MinusIcon onClick={() => remove(name)} />
                    </Space>
                  ))}
                  <Form.Item>
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      block
                      icon={<Plus />}
                      size="large"
                    >
                      Add Product
                    </Button>
                  </Form.Item>
                </>
              )}
            </Form.List>

            <Form.Item className="col-span-2">
              <Button size="large" htmlType="submit" type="primary">
                Generate
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Drawer>
    </div>
  );
};

export default App;
