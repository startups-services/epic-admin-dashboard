import { initAuth0 } from '@auth0/nextjs-auth0';

export default initAuth0({
  domain: 'epic-admin-dashboard.eu.auth0.com', // change to yours DOMAIN
  clientId: 'Rk9WltnijeKG86KlsJrGUQtl8HzUduEp', // change to yours CLIENT_ID
  clientSecret: '1GUtR3qLb9J9BkAPL00XIPRaQuf09gdip_H8K5DYUYUe9pZigzcNvM98S6dAfkhz', // change to yours CLIENT_SECRET
  scope: 'openid profile email',
  redirectUri: 'https://epic-admin-dashboard.startups-services.now.sh/api/callback',
  postLogoutRedirectUri: 'https://epic-admin-dashboard.startups-services.now.sh/',
  session: {
    // The secret used to encrypt the cookie.
    cookieSecret: 'some-very-very-very-very-very-very-very-very-long-secret',
    // The cookie lifetime (expiration) in seconds. Set to 8 hours by default.
    cookieLifetime: 60 * 60 * 8,
    // Store the id_token in the session. Defaults to false.
    storeIdToken: false,
    // Store the access_token in the session. Defaults to false.
    storeAccessToken: false,
    // Store the refresh_token in the session. Defaults to false.
    storeRefreshToken: false,
  },
  oidcClient: {
    // Optionally configure the timeout in milliseconds for HTTP requests to Auth0.
    httpTimeout: 2500,
    // Optionally configure the clock tolerance in milliseconds, if the time on your server is running behind.
    clockTolerance: 10000,
  },
});
