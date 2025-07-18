import React from 'react';
import { Layout, Typography, Button, Card, Row, Col, Space, Tag, Progress, Statistic, Badge } from 'antd';
import { 
  MailOutlined,
  EnvironmentOutlined,
  CheckCircleOutlined,
  StarOutlined,
  InstagramOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  YoutubeOutlined,
  WhatsAppOutlined,
  PhoneFilled,
  MailFilled,
  GlobalOutlined,
  MobileOutlined,
  EditOutlined,
  MessageOutlined,
  PictureOutlined,
  VideoCameraOutlined,
  RocketOutlined,
  TrophyOutlined,
  TeamOutlined,
  BulbOutlined,
  ThunderboltOutlined,
  HeartOutlined,
  FireOutlined,
  CrownOutlined,
  SmileOutlined,
  SafetyOutlined,
  ClockCircleOutlined,
  PlayCircleOutlined,
  FileTextOutlined
} from '@ant-design/icons';
import './Homepage.css';

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

const Homepage = () => {
  const services = [
    {
      icon: <PictureOutlined />,
      title: 'Graphics Design',
      description: 'Our unique & creative graphic design team has all your visual brand marketing needs covered: shareable infographics that emphasize visual storytelling, formatted white papers that demonstrate brand expertise, Google ads, logos, brochures and any kind of digital & print graphic needs.',
      color: '#ff6b6b',
      gradient: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)',
      stats: { projects: 150, satisfaction: 98 }
    },
    {
      icon: <GlobalOutlined />,
      title: 'Digital Marketing',
      description: 'The internet is a goldmine of opportunities for all kinds of businesses globally. Establish your digital presence today and discover your business potential with Build Web India. From Pay Per Click (PPC) to search engine optimization (SEO) and Social Media Marketing, we\'ve got you covered!',
      color: '#4ecdc4',
      gradient: 'linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%)',
      stats: { projects: 200, satisfaction: 95 }
    },
    {
      icon: <EditOutlined />,
      title: 'Design & Development',
      description: 'Are you looking for a creative website with a robust web design experience? We go through in-depth research to offer you a website design & development strategy better than your competitors to position you absolutely high in the market.',
      color: '#45b7d1',
      gradient: 'linear-gradient(135deg, #45b7d1 0%, #96c93d 100%)',
      stats: { projects: 180, satisfaction: 97 }
    },
    {
      icon: <MobileOutlined />,
      title: 'Mobile & Web Application',
      description: 'We are committed to providing innovative and customized mobile & web application development services that help your businesses to achieve their goals and stay ahead in the market. Our techies work to ensure that we deliver high-quality applications that meet your specific needs and requirements.',
      color: '#96ceb4',
      gradient: 'linear-gradient(135deg, #96ceb4 0%, #feca57 100%)',
      stats: { projects: 120, satisfaction: 99 }
    },
    {
      icon: <FileTextOutlined />,
      title: 'Content Writing',
      description: 'Keep your digital presence up-to-date with unique content, comprehensive and industry-related information that addresses your customers\' needs. Our team of content development specialists that create data-driven web content strategies and help you optimize your digital content for search engines and online presence.',
      color: '#feca57',
      gradient: 'linear-gradient(135deg, #feca57 0%, #ff9ff3 100%)',
      stats: { projects: 300, satisfaction: 96 }
    },
    {
      icon: <MessageOutlined />,
      title: 'Email & SMS Marketing',
      description: 'Can\'t get your business message to the right users at the right time? Bring your business closer to your target audience with our advanced SMS and WhatsApp marketing services in your digital marketing efforts and establish a stronger personal communication with your customers.',
      color: '#ff9ff3',
      gradient: 'linear-gradient(135deg, #ff9ff3 0%, #54a0ff 100%)',
      stats: { projects: 250, satisfaction: 94 }
    }
  ];

  const stats = [
    { icon: <RocketOutlined />, number: '500+', label: 'Projects Completed', color: '#ff6b6b' },
    { icon: <TeamOutlined />, number: '50+', label: 'Team Members', color: '#4ecdc4' },
    { icon: <TrophyOutlined />, number: '98%', label: 'Client Satisfaction', color: '#45b7d1' },
    { icon: <FireOutlined />, number: '5+', label: 'Years Experience', color: '#96ceb4' }
  ];

  const footerServices = [
    'Graphics & Multimedia',
    'Digital Marketing', 
    'Design & Development',
    'Mobile & Web Apps',
    'Video & Photography'
  ];

  return (
    <Content>
      {/* Animated Background */}
      <div className="animated-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">
            <Badge count="NEW" style={{ backgroundColor: '#ff6b6b' }} />
            <span>Digital Solutions Provider</span>
          </div>
          <Title level={1} className="hero-title">
            Looking for your next
            <span className="gradient-text"> Digital Solution?</span>
          </Title>
          <Title level={2} className="hero-subtitle">
            Creating Digital Experiences Across Pan India
          </Title>
          <Paragraph className="hero-description">
            Transform your business with cutting-edge digital solutions. We bring your vision to life with innovative technology and creative design.
          </Paragraph>
          <Space size="large" className="hero-buttons">
            <Button type="primary" size="large" className="cta-button" icon={<RocketOutlined />}>
              Get Started
            </Button>
            <Button size="large" className="secondary-button" icon={<PlayCircleOutlined />}>
              Watch Demo
            </Button>
          </Space>
        </div>
        <div className="hero-visual">
          <div className="floating-card card-1">
            <BulbOutlined />
            <span>Innovation</span>
          </div>
          <div className="floating-card card-2">
            <ThunderboltOutlined />
            <span>Speed</span>
          </div>
          <div className="floating-card card-3">
            <HeartOutlined />
            <span>Quality</span>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section">
        <Row gutter={[32, 32]} justify="center">
          {stats.map((stat, index) => (
            <Col xs={12} md={6} key={index}>
              <Card className="stat-card" bordered={false}>
                <div className="stat-icon" style={{ color: stat.color }}>
                  {stat.icon}
                </div>
                <Statistic 
                  title={stat.label}
                  value={stat.number}
                  valueStyle={{ color: stat.color, fontSize: '2rem', fontWeight: 'bold' }}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* About Section */}
      <div className="about-section">
        <Row gutter={[48, 48]} align="middle">
          <Col xs={24} lg={12}>
            <div className="section-header">
              <Tag color="blue" className="section-tag">About Us</Tag>
              <Title level={2} className="section-title">
                A Digital Platform Built for All Your Needs
              </Title>
            </div>
            <Paragraph className="section-description">
              At Build Web India, we specialize in delivering top-notch IT and digital solutions to businesses across India. 
              Our expert team offers a wide range of services to help you succeed in the digital world. From creative Graphics 
              Design that captures your brand's essence, to impactful Digital Marketing strategies that elevate your online 
              presence, we ensure your business stands out.
            </Paragraph>
            <div className="feature-list">
              <div className="feature-item">
                <CheckCircleOutlined className="feature-icon" />
                <span>Expert Team of Professionals</span>
              </div>
              <div className="feature-item">
                <CheckCircleOutlined className="feature-icon" />
                <span>Cutting-edge Technology</span>
              </div>
              <div className="feature-item">
                <CheckCircleOutlined className="feature-icon" />
                <span>24/7 Support & Maintenance</span>
              </div>
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <div className="video-container">
              <div className="video-placeholder">
                <VideoCameraOutlined className="play-icon" />
                <div className="video-overlay">
                  <span>Watch Our Story</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      {/* Services Section */}
      <div className="services-section">
        <div className="section-header text-center">
          <Tag color="green" className="section-tag">Our Services</Tag>
          <Title level={2} className="section-title">
            Your Needs - Our Expertise
          </Title>
          <Paragraph className="section-subtitle">
            We provide comprehensive digital solutions to help your business grow and succeed in the digital world.
          </Paragraph>
        </div>
        <Row gutter={[32, 32]}>
          {services.map((service, index) => (
            <Col xs={24} md={12} lg={8} key={index}>
              <Card 
                className="service-card"
                bordered={false}
                bodyStyle={{ padding: 0 }}
              >
                <div className="service-header" style={{ background: service.gradient }}>
                  <div className="service-icon">
                    {service.icon}
                  </div>
                </div>
                <div className="service-content">
                  <Title level={4} className="service-title">{service.title}</Title>
                  <Paragraph className="service-description">
                    {service.description}
                  </Paragraph>
                  <div className="service-stats">
                    <div className="stat-item">
                      <span className="stat-number">{service.stats.projects}+</span>
                      <span className="stat-label">Projects</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-number">{service.stats.satisfaction}%</span>
                      <span className="stat-label">Satisfaction</span>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* Why Choose Us Section */}
      <div className="why-choose-section">
        <Row gutter={[48, 48]} align="middle">
          <Col xs={24} lg={12}>
            <div className="image-container">
              <div className="main-image">
                <TeamOutlined className="team-icon" />
              </div>
              <div className="floating-badge badge-1">
                <SafetyOutlined />
                <span>Secure</span>
              </div>
              <div className="floating-badge badge-2">
                <ClockCircleOutlined />
                <span>Fast</span>
              </div>
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <div className="section-header">
              <Tag color="orange" className="section-tag">Why Choose Us</Tag>
              <Title level={2} className="section-title">
                We're Not Just Another Agency
              </Title>
            </div>
            <Paragraph className="section-description">
              Choosing the right Digital Engage is critical to your success as a smart business owner. 
              There are multiple options available to all size of businesses in the India, so it's crucial 
              to work with a organisation that understands your needs & requirement.
            </Paragraph>
            <div className="benefits-list">
              <div className="benefit-item">
                <div className="benefit-icon">
                  <StarOutlined />
                </div>
                <div className="benefit-content">
                  <h4>Premium Quality</h4>
                  <p>We never compromise on quality and always deliver the best results.</p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">
                  <SmileOutlined />
                </div>
                <div className="benefit-content">
                  <h4>Happy Clients</h4>
                  <p>Our clients love working with us and keep coming back for more.</p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">
                  <ThunderboltOutlined />
                </div>
                <div className="benefit-content">
                  <h4>Fast Delivery</h4>
                  <p>We understand time is money and deliver projects on time, every time.</p>
                </div>
              </div>
            </div>
            <Space size="middle" className="contact-buttons">
              <Button type="primary" size="large" className="contact-button" icon={<MailOutlined />}>
                Send Email
              </Button>
              <Button size="large" className="whatsapp-button" icon={<WhatsAppOutlined />}>
                WhatsApp
              </Button>
            </Space>
          </Col>
        </Row>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <div className="cta-content">
          <Row gutter={[48, 48]} align="middle">
            <Col xs={24} lg={12}>
              <div className="cta-text-content">
                <Title level={2} className="cta-title">
                  Looking for your next
                  <span className="gradient-text"> Digital Solution?</span>
                </Title>
                <Paragraph className="cta-description">
                  We're always open for a good cup of tea or coffee!
                </Paragraph>
                <div className="cta-features">
                  <div className="feature-item">
                    <CheckCircleOutlined />
                    <span>Free Consultation</span>
                  </div>
                  <div className="feature-item">
                    <CheckCircleOutlined />
                    <span>Quick Response</span>
                  </div>
                  <div className="feature-item">
                    <CheckCircleOutlined />
                    <span>Best Pricing</span>
                  </div>
                </div>
              </div>
            </Col>
            
            <Col xs={24} lg={12}>
              <div className="contact-form-container">
                <div className="form-header">
                  <h3>Get In Touch</h3>
                  <p>Let's discuss your project requirements</p>
                </div>
                
                <div className="contact-form">
                  <Row gutter={[16, 16]}>
                    <Col xs={24} sm={12}>
                      <div className="form-field">
                        <label>Full Name *</label>
                        <input 
                          type="text" 
                          placeholder="Enter your full name"
                          className="form-input"
                        />
                      </div>
                    </Col>
                    <Col xs={24} sm={12}>
                      <div className="form-field">
                        <label>Phone *</label>
                        <input 
                          type="tel" 
                          placeholder="Enter your phone number"
                          className="form-input"
                        />
                      </div>
                    </Col>
                    <Col xs={24}>
                      <div className="form-field">
                        <label>Email *</label>
                        <input 
                          type="email" 
                          placeholder="Enter your email address"
                          className="form-input"
                        />
                      </div>
                    </Col>
                    <Col xs={24}>
                      <div className="form-field">
                        <label>Service Required</label>
                        <select className="form-input">
                          <option value="">Select a service</option>
                          <option value="design">Design & Development</option>
                          <option value="marketing">Digital Marketing</option>
                          <option value="graphics">Graphics Design</option>
                          <option value="mobile">Mobile & Web Apps</option>
                          <option value="content">Content Writing</option>
                          <option value="email">Email & SMS Marketing</option>
                        </select>
                      </div>
                    </Col>
                    <Col xs={24}>
                      <div className="form-field">
                        <label>Your Message</label>
                        <textarea 
                          placeholder="Tell us about your project requirements..."
                          className="form-input form-textarea"
                          rows={3}
                        ></textarea>
                      </div>
                    </Col>
                    <Col xs={24}>
                      <Button type="primary" size="large" className="submit-button" icon={<RocketOutlined />}>
                        Send Request
                      </Button>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Content>
  );
};

export default Homepage; 