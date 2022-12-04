import { Card, Form, Input, Button, Checkbox } from "antd";
import "./index.scss";
import { useStore } from "@/store/index.js";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const { loginStore } = useStore();
  console.log(loginStore);

  return (
    <div className="login">
      <Card className="login-container">
        <div className="header">
          <Button type="primary" onClick={() => navigate("/login")}>
            login
          </Button>

          <Button type="primary">sign up</Button>
        </div>
        <div className="login-box">
          <Form layout="vertical" validateTrigger={["onBlur", "onChange"]}>
            <Form.Item
              name="email"
              label="email"
              rules={[
                {
                  required: true,
                  message: "email",
                },
              ]}
            >
              <Input size="large" placeholder="place input email" />
            </Form.Item>
            <Form.Item
              name="password"
              label="password"
              rules={[
                {
                  required: true,
                  message: "place input password",
                },
              ]}
            >
              <Input size="large" placeholder="place inptut password" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" size="large" block>
                sing up
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className="login-credential">
          <Button type="primary">Login</Button>
        </div>
      </Card>
    </div>
  );
};
export default Register;
