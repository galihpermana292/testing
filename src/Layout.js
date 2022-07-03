import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../css/site.css';
import Menu from './Menu';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			{/* <Menu/> */}
			{children}
			{/* <Footer /> */}
		</>
	);
};

export default Layout;
