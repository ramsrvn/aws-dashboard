import { Card, Button } from "antd";
import {  useNavigate } from 'react-router-dom';

import "./index.scss";

const Home = () => {
  const gridStyle = {
    width: "50%",
    textAlign: "center",
  };
  const navigate = useNavigate()
  return (
    <div className="home">
      <div className="default">
        <div className="content">
          <Card title="EC2 Instance">
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
          </Card>
        </div>
      </div>
      <div>
        <Button type="primary" onClick={()=>navigate('/')}>back options</Button>
      </div>
    </div>
  );
};
export default Home;
