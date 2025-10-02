
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children, noPadding }) => {
  return (
    <div className="page-wrapper">
      <Navbar />
      <main className={noPadding ? '' : 'default-main'} style={{paddingTop: '80px'}}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
