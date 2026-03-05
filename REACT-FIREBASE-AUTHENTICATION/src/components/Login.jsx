import { Button, Card, Form, Input, message } from "antd";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth} from "../config/firebase-config";
import "animate.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()
  const loginUser = async (values) => {
    try {
      await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password,
      )
      navigate("/profile")
     
    } catch (err) {
      message.error("Invalid credential");
    }
  };

  return (
    <div className="bg-gray-300 flex items-center gap-8 justify-center h-screen overflow-hidden">
      <Card
        className="w-1/4 shadow-lg animate__animated animate__slideInUp"
        title={<h1 className="text-2xl font-bold">Login</h1>}
      >
        <Form layout="vertical" onFinish={loginUser}>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, type: "email" }]}
            className="font-semibold"
          >
            <Input size="large" placeholder="mail@gmail.com" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true }]}
            className="font-semibold"
          >
            <Input size="large" placeholder="************" />
          </Form.Item>

          <Form.Item>
            <Button
              size="large"
              type="primary"
              htmlType="submit"
              className="w-full"
            >
              Sign in
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
