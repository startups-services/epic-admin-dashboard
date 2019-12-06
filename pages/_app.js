import App from 'next/app';
import React from 'react';
import { toast } from 'react-toastify';
import { Provider } from 'react-redux';
import { Router } from 'next/router';
import withReduxStore from '../redux/_lib/with-redux-store';
import './empty.css';
import 'react-toastify/dist/ReactToastify.css';
import { Auth0Provider } from '../Auth0/react-auth0-spa';
import config from '../auth_config';

toast.configure(
  { position: toast.POSITION.BOTTOM_RIGHT },
);

const onRedirectCallback = (appState) => {
  Router.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : 'http://localhost:3000/',

  );
};

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
      <Auth0Provider
        domain={config.domain}
        client_id={config.clientId}
        redirect_uri={(typeof window === 'object') && 'http://localhost:3000/'}
        onRedirectCallback={onRedirectCallback}
      >
        <Provider store={reduxStore}>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Component {...pageProps} />
        </Provider>
      </Auth0Provider>
    );
  }
}

export default withReduxStore(MyApp);
