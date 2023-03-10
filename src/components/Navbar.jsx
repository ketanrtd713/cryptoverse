import React from "react";
import {Button, Menu , Typography, Avatar} from 'antd';
import {Link} from 'react-router-dom';
import icon from '../images/cryptocurrency.png'
import { HomeOutlined } from "@ant-design/icons";
import { BulbOutlined, FundOutlined, MoneyCollectFilled, MoneyCollectOutlined } from "@ant-design/icons/lib/icons";

const Navbar = () => {
  return <div className="nav-container">
    <div className="logo-container">
        <Avatar src={icon} size="large"/>
        <Typography.Title level={2} className="logo">
            <Link to="/"> Cryptoverse</Link>
        </Typography.Title>
        {/* <Button className="menu-control-container"></Button>  */}
        {/* use this button on mobile devices  */}
    </div>
    <Menu theme="dark">
        <Menu.Item icon={<HomeOutlined/>}>
            <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item icon={<FundOutlined/>}>
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </Menu.Item>
        <Menu.Item icon={<MoneyCollectOutlined/>}>
            <Link to="/exchanges">Exchanges</Link>
        </Menu.Item>
        <Menu.Item icon={<BulbOutlined/>}>
            <Link to="/news">News</Link>
        </Menu.Item>
    </Menu>
  </div>;
};

export default Navbar;
