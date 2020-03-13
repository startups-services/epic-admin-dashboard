# epic-admin-dashboard 

5-minutes-setup React, Next.js, GraphQl and CSS-In-JS framework for any types of web apps.

### [Demo](https://epic-admin-dashboard.startups-services.now.sh/)
SignUp or SignIn with your Auth0, or use test user:
*demo@demo.com* /
*Dem0Dem0*

## Features

* Ready for production after 5 minutes setup
* Large library of ready components cataloged by [StoryBook](https://storybook.js.org/)
* Server-Side Rendering by [Next.js](https://nextjs.org/) 
* Beautiful design by [EpicPxls](https://www.epicpxls.com/)
* Stable and predicable data flow with [redux](https://redux.js.org/), [redux-thunk](https://github.com/reduxjs/redux-thunk), [immer](https://github.com/immerjs/immer) and few more
* Built-in authentication by [Auth0](https://auth0.com/) 
* Built-in BaaS integration with [GraphCMS](https://graphcms.com )
* Easy change data source to another
* CSS-in-JS by [Emotion](https://emotion.sh)
* Super-fast UI thanks to optimistic rendering (renders before the server returns)
* All code write by [eslint airbnb style guide](https://github.com/airbnb/javascript)
* And awesome notifications by [react-toastify](https://github.com/fkhadra/react-toastify)

## Getting Started

#### Installation
epic-admin-dashboard is fast to install:

```sh
git clone https://github.com/startups-services/epic-admin-dashboard.git
cd epic-admin-dashboard/
npm i 
npm run fetcherinstall
```
#### Auth0 Configuration

Create a **Regular Web Application** in the [Auth0 Dashboard](https://manage.auth0.com/). 

OR

If you're using an existing application you'll want to verify that the following settings are configured as follows:

 - **Json Web Token Signature Algorithm**: `RS256`
 - **OIDC Conformant**: `True`

THEN

Go ahead and configure the URLs for your application:

- **Allowed Callback URLs**: http://localhost:3000/api/callback
- **Allowed Logout URLs**: http://localhost:3000/

Take yours **Client ID**, **Client Secret** and **Domain** and add them to ./auth0config

#### GraphCMS Configuration 

Create a new project from scratch in [GraphCMS](https://app.graphcms.com/)

Go to settings page and create one Permanent Access Token(PAT) for Scope "OPEN"

Copy yours **ENDPOINT** and **PAT** from this page to /packages/graphcmsfetcher/.env.example
Then rename this file to .env

if you want run script to add to default data to the base
```sh
npm run resetbasetodefaults
```

#### Run locally 

we run little node.js app to hide your base credentials from client:
```sh
  npm run fetcher
```
then run app:
```sh
  npm run dev
```
and if you want to see catalog of all components:
```sh
  npm run storybook
```

That's all!

## Does It Work With My API?

Yes.
If you use GraphQl you may add your own endpoint and send queries to it.
If you use REST API, all queries making separate in redux actions and you may easily change graphQL queries execution to REST API calls 


## Batteries Included But Removable

React-admin is designed as a library of loosely coupled React components built on top of [material-ui](https://material-ui.com/), in addition to controller functions implemented the Redux way. It is very easy to replace one part of react-admin with your own, e.g. to use a custom datagrid, GraphQL instead of REST, or bootstrap instead of Material Design.


## License

## Donate
