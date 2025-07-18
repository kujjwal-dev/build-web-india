import React from 'react';
import { Layout, Typography, Button, Row, Col, Space, Divider, List } from 'antd';
import { 
  HomeOutlined, 
  UserOutlined, 
  SolutionOutlined, 
  FileTextOutlined, 
  PhoneOutlined,
  InstagramOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  YoutubeOutlined,
  PhoneFilled,
  MailFilled,
  EnvironmentOutlined,
  CrownOutlined
} from '@ant-design/icons';
import './Footer.css';

const { Footer: AntFooter } = Layout;
const { Title, Paragraph, Text } = Typography;

const Footer = () => {
  const footerLinks = [
    { title: 'Home' },
    { title: 'About' },
    { title: 'Solutions' },
    { title: 'Blog' },
    { title: 'Contact' }
  ];

  const footerServices = [
    'Graphics & Multimedia',
    'Digital Marketing', 
    'Design & Development',
    'Mobile & Web Apps',
    'Video & Photography'
  ];

  return (
    <AntFooter className="footer">
      <div className="footer-content">
        <Row gutter={[48, 48]}>
          <Col xs={24} md={8}>
            <div className="footer-brand">
              <div className="footer-logo">
                <CrownOutlined />
                <span>Build Web India</span>
              </div>
              <Paragraph className="footer-description">
                Build Web India provides a wide range of solutions to help businesses succeed in their goals. 
                Our services are designed to meet the unique & digital needs of each brand and are delivered 
                by a team of experienced professionals.
              </Paragraph>
              <div className="social-links">
                <Button type="text" className="social-button" icon={<InstagramOutlined />} />
                <Button type="text" className="social-button" icon={<FacebookOutlined />} />
                <Button type="text" className="social-button" icon={<LinkedinOutlined />} />
                <Button type="text" className="social-button" icon={<YoutubeOutlined />} />
              </div>
            </div>
          </Col>
          
          <Col xs={24} md={8}>
            <Title level={5} className="footer-title">Quick Links</Title>
            <List
              className="footer-list"
              dataSource={footerLinks}
              renderItem={item => (
                <List.Item className="footer-list-item">
                  <Text className="footer-link">
                    {item.title}
                  </Text>
                </List.Item>
              )}
            />
          </Col>
          
          <Col xs={24} md={8}>
            <Title level={5} className="footer-title">Our Services</Title>
            <List
              className="footer-list"
              dataSource={footerServices}
              renderItem={item => (
                <List.Item className="footer-list-item">
                  <Text className="footer-service">{item}</Text>
                </List.Item>
              )}
            />
          </Col>
        </Row>
        
        <Divider className="footer-divider" />
        
        <Row gutter={[48, 48]} align="middle" className="footer-bottom">
          <Col xs={24} md={12}>
            <div className="contact-info">
              <div className="contact-item">
                <EnvironmentOutlined />
                <span>WZ-865 Nangal Raya, Pankha Road, New Delhi - 110046</span>
              </div>
              <div className="contact-item">
                <MailFilled />
                <span>hello@buildwebindia.com</span>
              </div>
              <div className="contact-item">
                <PhoneFilled />
                <span>+91-8800332035</span>
              </div>
            </div>
          </Col>
          <Col xs={24} md={12} className="text-right">
            <Text className="copyright">
              © Copyright ©2024 Build Web India. All Rights Reserved.
            </Text>
          </Col>
        </Row>
      </div>
    </AntFooter>
  );
};

export default Footer; 