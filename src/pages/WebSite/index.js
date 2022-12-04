import {
  Button,
  Checkbox,
  Form,
  Tabs,
  Input,
  Card,
  message,
  Upload,
  Modal
} from "antd";
import { UploadOutlined, DownOutlined, SmileOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import {useState} from 'react'
import "./index.scss";

const WebSite = () => {
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="WebSite">
      <div className="title">Static WebSite</div>
      <div className="cardContainer">
        <Card style={{ width: 600 }}>
          <div className="btn-box">
            <div className="left">
              <Button onClick={showModal}>Create Default WebSite</Button>
            </div>
            <div className="right">
              <Upload {...props}>
                <Button>Upload File</Button>
              </Upload>
              <div className="uploadFolder">
              <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                directory
                
              >
                <Button>Upload Folder</Button>
              </Upload>
              </div>
              
            </div>
          </div>
        </Card>
      </div>
      <Modal  open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
        WebSite:<Input placeholder="place input website url" style={{width:300}}/>
        <Button>open</Button>
      </Modal>
    </div>
  );
};
export default WebSite;
