import App from 'next/app';
import React from 'react';
import { toast } from 'react-toastify';
import { Provider } from 'react-redux';
import withReduxStore from '../redux/_lib/with-redux-store';
import './empty.css';

import 'react-toastify/dist/ReactToastify.css';

toast.configure(
  { position: toast.POSITION.BOTTOM_RIGHT },
);

class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }

  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Provider store={reduxStore}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default withReduxStore(MyApp);
