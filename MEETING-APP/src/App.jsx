import { Button, DatePicker, Form, Input } from "antd";
import { ArrowRight } from "lucide-react";
import moment from "moment-timezone";
import "animate.css";
const App = () => {
  const scheduleMeeting = (values) => {
    const title = encodeURIComponent(values.title);
    const description = encodeURIComponent(values.description);
    const startsAt = moment
      .tz(values.startAt, "Asia/Kolkata")
      .format("YYYYMMDDTHHmmss");
    const endsAt = moment
      .tz(values.endsAt, "Asia/Kolkata")
      .format("YYYYMMDDTHHmmss");
    const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startsAt}/${endsAt}&details=${description}&location=Online&ctz=Asia/Kolkata`;

    window.location.href = url;
    // console.log(values);
  };
  return (
    <div className="bg-gray-200 h-screen flex items-center justify-center">
      <div className="bg-white rounded-4xl shadow-lg  w-6/12 p-8">
        <h1 className="text-4xl font-bold mb-8">Meeting Schedule 🗓️</h1>
        <Form onFinish={scheduleMeeting}>
          <Form.Item
            className="font-medium"
            label="Meeting title"
            name="title"
            rules={[{ required: true }]}
          >
            <Input size="large" placeholder="Product update" />
          </Form.Item>

          <Form.Item
            className="font-medium"
            label="Description"
            name="description"
            rules={[{ required: true }]}
          >
            <Input.TextArea
              size="large"
              rows={5}
              placeholder="Description Goes here"
            />
          </Form.Item>

          <Form.Item
            className="font-medium"
            label="Starts At"
            name="startsAt"
            rules={[{ required: true }]}
          >
            <DatePicker
              showTime
              size="large"
              placeholder="choose date"
              className="w-full!"
            />
          </Form.Item>

          <Form.Item
            className="font-medium"
            label="Ends At"
            name="endsAt"
            rules={[{ required: true }]}
          >
            <DatePicker
              showTime
              size="large"
              placeholder="choose date"
              className="w-full!"
            />
          </Form.Item>

          <Form.Item>
            <Button
              icon={<ArrowRight className="w-4 h-4" />}
              className="w-full! font-semibold"
              size="large"
              type="primary"
              htmlType="submit"
            >
              Schedule Now
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default App;
