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
    Tag 
  } from "antd";
  import { UploadOutlined ,DownOutlined,SmileOutlined } from "@ant-design/icons";
  import { useNavigate } from "react-router-dom";
  
  import "./index.scss";
  
  const UploadBucket = () => {
    const gridStyle = {
      width: "50%",
      textAlign: "center",
    };
    
    const navigate = useNavigate();
    const props = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
          authorization: 'authorization-text',
        },
        onChange(info) {
          if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
          if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
          } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
        //   navigate('/')
        },
      };
    const tagClick = () => {
      navigate('/FileInfo')
    }
    return (
      <div className="UploadBucket">
        <Card style={{ width: 700 }}>
            <div className="title">
                S3 Bucket A
            </div>
            <div className="box">
            <div className="tagCon">
                <Tag onClick={tagClick}>file</Tag>
                
            </div>
            <div className="btn">
            <Upload {...props}>
                <Button >Upload</Button>
            </Upload>
            <Button type="dashed">Delete</Button>
            <Button type="dashed">Delete Bucket A</Button>
            </div>
            </div>
            
            
        </Card>
      </div>
    );
  };
  export default UploadBucket;
  