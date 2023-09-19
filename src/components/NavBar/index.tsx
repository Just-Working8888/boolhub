import React from 'react';
import { Menu } from 'antd';
import { HomeOutlined, AppstoreAddOutlined, UserOutlined } from '@ant-design/icons';



const NavBar: React.FC = () => {
  
  return (
    <Menu mode="horizontal" className='flex flex-sb rounded'>
      <div><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Google_Books_logo_2015.svg/1280px-Google_Books_logo_2015.svg.png" style={{width:"80px"}} alt="" /></div>
      
      <Menu.Item key="home" icon={<HomeOutlined />}>
        Home
      </Menu.Item>
      <Menu.Item key="products" icon={<AppstoreAddOutlined />}>
        Products
      </Menu.Item>
      <Menu.Item key="profile" icon={<UserOutlined />}>
        Profile
      </Menu.Item>
    
     
    </Menu>
  );
};

export default NavBar;
