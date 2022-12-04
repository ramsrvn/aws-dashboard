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
  Tag,
} from "antd";
import { UploadOutlined, DownOutlined, SmileOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import "./index.scss";

const FileInfo = () => {
  const { TextArea } = Input;
  const gridStyle = {
    width: "50%",
    textAlign: "center",
  };

  const navigate = useNavigate();
  
  return (
    <div className="FileInfo">
      <Card style={{ width: 700 }}>
        <div className="box">
          <div className="btn">
            <Button>Edit</Button>
            <Button>Delete</Button>
            
              <Button >Download</Button>
            
          </div>
          <div className="text-box">
            <TextArea rows={4} />
          </div>
        </div>
      </Card>
    </div>
  );
};
export default FileInfo;
