// import '../styles/globals.css'
import React from 'react';
import App, {Container} from 'next/app';
import Layout from '../src/Layout';
import '../css/site.css';

function MyApp({ Component, pageProps }) {
  return (
     <>
        <Layout>
           <Component {...pageProps} />
        </Layout>
     </>
  )
}

export default MyApp
