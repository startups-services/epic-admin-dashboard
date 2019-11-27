import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import TopBar from './TopBar';
import HtmlHead from './HtmlHead';
import Content from './Content';
import COLORS from '../constants';
import LeftBarNavMenu from './LeftBarNavMenu';
import { leftDocumentPadding, topDocumentPadding } from '../_Utility/constants';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 70px 1fr;
  background: pink;
  height: 100vh;
  width: 100%;
`;

const LeftBarTop = styled.div`
  background-color: ${COLORS.white};
  grid-column-start: 1;
  grid-column-end: span 1;
  grid-row-start: 1;
  grid-row-end: span 1;
  border-right: 1px solid ${COLORS.gray2};
  padding: ${topDocumentPadding} 0 0 ${leftDocumentPadding};
`;

const Layout = ({ children }) => (
  <Grid>
    <HtmlHead />
    <LeftBarTop />
    <LeftBarNavMenu />
    <TopBar />
    <Content>
      {children}
    </Content>
  </Grid>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
