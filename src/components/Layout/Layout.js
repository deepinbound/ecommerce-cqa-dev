import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import Header from '../Header';
import Footer from '../Footer';
import * as styles from './Layout.module.css';

// CSS not modular here to provide global styles
import './Globals.css';

const Layout = ({ props, children, disablePaddingBottom = false }) => {
  return (
    <>
      <Helmet>
        {/* Add any sitewide scripts here */}
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <script
          type="text/javascript"
          src="https://sdk.qualetics.com/qualetics-js-sdk-v3.js"
        />
        <script
          type="text/javascript"
          src="https://cqa-media.s3.us-east-2.amazonaws.com/qualetics.js"
        />
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <script type="text/javascript" src="https://cqa-media.s3.us-east-2.amazonaws.com/cqascript1.js"></script>
        <script type="text/javascript" src="https://cqa-media.s3.us-east-2.amazonaws.com/cqascript2.js"></script>
      </Helmet>

      <Header />
      <main
        className={`${styles.main} ${disablePaddingBottom === true ? styles.disablePaddingBottom : ''
          }`}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
