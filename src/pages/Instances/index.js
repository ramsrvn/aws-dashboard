import {
  Button,
  Checkbox,
  Form,
  Tabs,
  Input,
  Card,
  message,
  Upload,
  Dropdown,
  Space,
} from "antd";
import { UploadOutlined ,DownOutlined,SmileOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import "./index.scss";

const Instances = () => {
  const gridStyle = {
    width: "50%",
    textAlign: "center",
  };
  const props = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/AddInstance");
  };
  const items = [
    { label: 'instance1', key: '1' }, // 菜单项务必填写 key
    { label: 'instance2', key: '2' },
  ];
  const onClick = (item) => {
   console.log(item)
   navigate("/ShowInstance");
  };
  return (
    <div className="home">
      <div className="title">Manage EC2 Instance</div>
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Create Default EC2 instance" key="1">
          <div className="default">
            <div className="content">
            <Form.Item >
                    <Button onClick={handleSubmit}>Create Default EC2 Instance</Button>
                  </Form.Item>
           {/*   <Card title="EC2 Instance">
                <Card.Grid hoverable={false} style={gridStyle}>
                  ID:123456
                </Card.Grid>
                <Card.Grid hoverable={false} style={gridStyle}>
                  X:abcd
                </Card.Grid>
                <Card.Grid hoverable={false} style={gridStyle}>
                  status:Running
                </Card.Grid>
                <Card.Grid hoverable={false} style={gridStyle}>
                  Y:def
                </Card.Grid>
                <Card.Grid hoverable={false} style={gridStyle}>
                  IP Address:192.168.1.0
                </Card.Grid>
                <Card.Grid hoverable={false} style={gridStyle}>
                  Z:ghi
                </Card.Grid>
                 
              </Card> */}
            </div>
          </div>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Create EC2 instance Manually" key="2">
          <Card style={{ width: 600 }}>
          <div className="manually">
            <div className="content">
              <div className="for-title"></div>
              <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                autoComplete="off"
              >
                <Form.Item
                  label="Enter AMI ID"
                  name="ID"
                  rules={[{ required: false, message: "Please input AMI ID!" }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Enter Instance Type"
                  name="Type"
                  rules={[
                    { required: false, message: "Please input Instance Type!" },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Security Group"
                  name="Group"
                  rules={[
                    { required: false, message: "Please input Security Group!" },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Key Pair"
                  name="Pair"
                  rules={[
                    { required: true, message: "Please input Key Pair!" },
                  ]}
                >
                  <Upload {...props}>
                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                  </Upload>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                </Form.Item>
              </Form>
              );
            </div>
          </div>
          </Card>
          
        </Tabs.TabPane>
        <Tabs.TabPane tab="List Running EC2 instance" key="3">
          <div className="list">
            <div className="content">
              <div className="site-card-border-less-wrapper">
                <Card
                  title="Running EC2 Instance"
                  bordered={false}
                  style={{ width: 300 }}
                >
                 <Dropdown menu={{ items,onClick }}>
                  <a>instances<DownOutlined /></a>
                </Dropdown>
                <div className="btn">
                  <Button type="primary" >Refresh</Button>

                </div>
                </Card>
              </div>
              
            </div>
          </div>
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};
export default Instances;
