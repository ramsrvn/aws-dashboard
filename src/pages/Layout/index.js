import {Layout,Menu,Popconfirm} from 'antd'
import {
  HomeOutlined,
  DiffOutlined,
  EditOutlined,
  LogoutOutlined
} from '@ant-design/icons'
import './index.scss'
import { Link,Outlet,Routes,useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '@/store';
const {Header,Sider} = Layout
const GeekLayout = (props) => {
  const location = useLocation()
  const [selectedKey,setSelectKey] = useState(location.pathname) 
  const {userStore,loginStore} = useStore()
  useEffect(()=>{
    userStore.getUserInfo()
  },[userStore])
  useEffect(()=>{
    setSelectKey(location.pathname)
    console.log('location',location)
  })
  const navigate = useNavigate()
  const onLogout = () => {
    loginStore.loginOut()
    navigate('/login')
  }
  return (<Layout>
    <Header className="header">
      <div className='title'>
        Welcome username
      </div>
      <div className="user-info">
        {/* <span className="user-name">{"username"}</span> */}
        <span className="user-logout">
          <Popconfirm title="whether exit？" okText="exit" cancelText="cancel"
          onConfirm={onLogout}
          >
            <LogoutOutlined /> exit
          </Popconfirm>
        </span>
      </div>
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          theme="dark"
          
          selectedKeys={[selectedKey]}
          style={{ height: '100%', borderRight: 0 }}
        >
          
          <Menu.Item  >
            <Link to="/">Manage EC2 Instance</Link>
            
          </Menu.Item>
          <Menu.Item  >
          <Link to="/Buckets">Manage S3 buckets</Link>
            
          </Menu.Item>
          <Menu.Item  >
          <Link to="/WebSite"> Manage Static Website</Link>

           
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="layout-content" style={{ padding: 20 }}>
   
          <Outlet></Outlet>
     
      </Layout>
    </Layout>
  </Layout>)
};

export default observer(GeekLayout);
