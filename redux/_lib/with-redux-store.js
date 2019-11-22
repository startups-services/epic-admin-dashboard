/* eslint-disable no-undef */
import React from 'react';
import initializeStore from '../store';

const isServer = typeof window === 'undefined';
const NEXT_REDUX_STORE = 'NEXT_REDUX_STORE';

function getOrCreateStore(initialState) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return initializeStore(initialState);
  }

  // Create store if unavailable on the client and set it on the window object
  if (!window[NEXT_REDUX_STORE]) {
    window[NEXT_REDUX_STORE] = initializeStore(initialState);
  }
  return window[NEXT_REDUX_STORE];
}

export default (App) => class AppWithRedux extends React.Component {
  static async getInitialProps(appContext) {
    // Get or Create the store with `undefined` as initialState
    // This allows you to set a custom default initialState
    const reduxStore = getOrCreateStore();

    // Provide the store to getInitialProps of pages
    // eslint-disable-next-line no-param-reassign
    appContext.ctx.reduxStore = reduxStore;

    let appProps = {};
    if (typeof App.getInitialProps === 'function') {
      appProps = await App.getInitialProps(appContext);
    }

    return {
      ...appProps,
      initialReduxState: reduxStore.getState(),
    };
  }

  constructor(props) {
    super(props);
    // eslint-disable-next-line react/prop-types
    this.reduxStore = getOrCreateStore(props.initialReduxState);
  }

  render() {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <App {...this.props} reduxStore={this.reduxStore} />;
  }
};
