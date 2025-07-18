import React, { useState, useEffect } from 'react';
import { Layout, Typography, Button, Space, Drawer } from 'antd';
import { 
  HomeOutlined, 
  UserOutlined, 
  SolutionOutlined, 
  FileTextOutlined, 
  PhoneOutlined,
  CrownOutlined,
  MenuOutlined,
  CloseOutlined
} from '@ant-design/icons';
import './Navbar.css';

const { Header } = Layout;
const { Title } = Typography;

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { title: 'Home', icon: <HomeOutlined /> },
    { title: 'About', icon: <UserOutlined /> },
    { title: 'Solutions', icon: <SolutionOutlined /> },
    { title: 'Blog', icon: <FileTextOutlined /> },
    { title: 'Contact', icon: <PhoneOutlined /> }
  ];

  const handleNavClick = (link) => {
    // Close mobile menu when a link is clicked
    setMobileMenuOpen(false);
    // You can add smooth scrolling to sections here
  };

  return (
    <>
      <Header className={`glass-header ${scrollY > 50 ? 'scrolled' : ''}`}>
        <div className="header-content">
          <div className="logo-container">
            <CrownOutlined className="logo-icon" />
            <Title level={3} className="logo-text">
              Build Web India
            </Title>
          </div>
          
          {/* Desktop Navigation */}
          <Space size="large" className="nav-links desktop-nav">
            {navLinks.map(link => (
              <Button 
                key={link.title} 
                type="text" 
                className="nav-button" 
                icon={link.icon}
                onClick={() => handleNavClick(link.title)}
              >
                {link.title}
              </Button>
            ))}
          </Space>

          {/* Mobile Menu Button */}
          <Button 
            type="text" 
            className="mobile-menu-btn"
            icon={<MenuOutlined />}
            onClick={() => setMobileMenuOpen(true)}
          />
        </div>
      </Header>

      {/* Mobile Drawer */}
      <Drawer
        title={
          <div className="drawer-header">
            <CrownOutlined className="drawer-logo-icon" />
            <span className="drawer-logo-text">Build Web India</span>
          </div>
        }
        placement="top"
        onClose={() => setMobileMenuOpen(false)}
        open={mobileMenuOpen}
        className="mobile-drawer"
        height="auto"
        closeIcon={<CloseOutlined />}
      >
        <div className="mobile-nav-menu">
          {navLinks.map(link => (
            <Button 
              key={link.title} 
              type="text" 
              className="mobile-nav-button" 
              icon={link.icon}
              onClick={() => handleNavClick(link.title)}
            >
              {link.title}
            </Button>
          ))}
        </div>
      </Drawer>
    </>
  );
};

export default Navbar; 