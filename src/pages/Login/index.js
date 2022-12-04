import { Card, Form, Input, Button, Checkbox } from "antd";
import logo from "@/assets/logo.png";
import "./index.scss";
import { useStore } from "@/store/index.js";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
const Login = () => {
  const navigate = useNavigate();
  const { loginStore } = useStore();
  console.log(loginStore);

  const onFisish = async (values) => {
    const { email, password } = values;
    navigate("/");
    console.log(values);
  };
  // const [box, setBox] = useState('login')
  let login = useRef(null);
  let login_cre = useRef(null);
  const changeBox = (box) => {
    console.log(box);
    console.log("login", login.current);

    if (box == "login") {
      login.current.style.display = "block";
      login_cre.current.style.display = "none";
    } else {
      login.current.style.display = "none";
      login_cre.current.style.display = "block";
    }
  };
  const toRegister = () => {
    navigate("/register");
  };
  return (
    <div className="login">
      <Card className="login-container">
        <div className="header">
          <Button type="primary" onClick={() => changeBox("login")}>
            login
          </Button>
          <Button type="primary" onClick={() => changeBox("login-cre")}>
            login with credential
          </Button>
          <Button type="primary" onClick={toRegister}>
            sign up
          </Button>
        </div>
        <div className="login-box" ref={login}>
          <Form
            onFinish={onFisish}
            layout="vertical"
            validateTrigger={["onBlur", "onChange"]}
          >
            <Form.Item
              name="email"
              label="email"
              rules={[
                {
                  required: true,
                  message: "password",
                },
              ]}
            >
              <Input size="large" placeholder="email" />
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
              <Input size="large" placeholder="place input password" />
            </Form.Item>
            

            <Form.Item>
              <Button type="primary" htmlType="submit" size="large" block>
                Login
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className="login-credential" ref={login_cre}>
          <Button type="primary">Login</Button>
        </div>
      </Card>
    </div>
  );
};
export default Login;
