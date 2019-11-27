import React from 'react';
import Head from 'next/dist/next-server/lib/head';

const HtmlHead = () => (
  <Head>
    <title>Epic Admin Dashboard</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <link rel="apple-touch-icon" sizes="76x76" href="/static/favicon/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon/favicon-16x16.png" />
    <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />
    <link rel="manifest" href="/static/favicon/site.webmanifest" />
    <link rel="mask-icon" href="/static/favicon/safari-pinned-tab.svg" color="#5bbad5" />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="theme-color" content="#ffffff" />
  </Head>
);

export default HtmlHead;
