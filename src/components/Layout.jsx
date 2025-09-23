import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="default-main">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;