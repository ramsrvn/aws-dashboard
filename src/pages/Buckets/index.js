import {
  Button,
  Checkbox,
  Form,
  Tabs,
  Input,
  Card,
  message,
  Upload,
  Radio,
  Tag
} from "antd";
import { UploadOutlined, DownOutlined, SmileOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import "./index.scss";

const Buckets = () => {
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
    navigate("/AddBucket");
  };
  const items = [
    { label: "instance1", key: "1" }, // 菜单项务必填写 key
    { label: "instance2", key: "2" },
  ];
  const onClick = (item) => {
    console.log(item);
    navigate("/ShowInstance");
  };
  const tagClick = () => {
    navigate("/ShowBucketInfo");
  }
  return (
    <div className="Buckets">
      <div className="title">Manage S3 buckets</div>
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Create S3 buckets" key="1">
          <div className="default">
            <div className="content">
              <Card>
                <Form
                  labelCol={{
                    span: 4,
                  }}
                  wrapperCol={{
                    span: 14,
                  }}
                  layout="horizontal"
                >
                  <Form.Item label="Bucket Name:">
                    <Input />
                  </Form.Item>
                  <Form.Item label="Bucket policy:">
                    <Input />
                  </Form.Item>
                  <Form.Item label="">
                    <Radio.Group>
                      <Radio value="public"> public </Radio>
                      <Radio value="private"> private </Radio>
                    </Radio.Group>
                  </Form.Item>

                  <Form.Item >
                    <Button onClick={handleSubmit}>submit</Button>
                  </Form.Item>
                </Form>
              </Card>
            </div>
          </div>
        </Tabs.TabPane>
        <Tabs.TabPane tab="List S3 buckets" key="2">
          <div className="cardBox">
          <Card title="S3 bucket lists" bordered={false} style={{ width: '100%' }}>
            <div className="list-title">List all existed S3 buckets:</div>
          <div className="bucket-list">
          <Tag onClick={tagClick}>bucket1</Tag>
          <Tag onClick={tagClick}>bucket2</Tag>
          <Tag onClick={tagClick}>bucket3</Tag>
          <Tag onClick={tagClick}>bucket4</Tag>
          </div>
          <div className="btn">
            <Button>Create new bucket</Button>
          </div>
        </Card>
          </div>
        
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};
export default Buckets;
