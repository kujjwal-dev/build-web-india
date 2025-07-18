import React from 'react';
import { Layout } from 'antd';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import './App.css';

const { Header, Content, Footer: AntFooter } = Layout;

function App() {
  return (
    <Layout className="app">
      <Header className="header">
        <Navbar />
      </Header>
      <Content>
        <Homepage />
      </Content>
      <AntFooter className="footer-container">
        <Footer />
      </AntFooter>
    </Layout>
  );
}

export default App;
