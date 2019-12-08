import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { css, Global } from '@emotion/core';
import Layout from './Layout/Layout';
import COLORS from './constants';
import { getAllUsers } from '../redux/users/actions';
import 'react-toastify/dist/ReactToastify.css';
import Preloader from './PagePreloader/PagePreloader';


const Grid = css`
  display: grid;
  grid-template-columns: 50px 1fr 1fr 1fr 50px;
  grid-template-rows: 20% 20% 20% 20% 20%;
  background: red;
`;

const App = ({ children }) => {
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users);
  const token = useSelector((store) => store.activeUser.token);

  useEffect(() => {
    // dispatch(checkCurrUser(Cookies.get(COOKIE_TOKEN_NAME)));
    if (token && users.items.length === 0) {
      dispatch(getAllUsers());
    }
  }, []);

  return (
    <div>
      <Global
        styles={css`
        html,
        body {
          margin: 0;
          font-family: Roboto, sans-serif;
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 16px;
          letter-spacing: 0.25px;
          color: ${COLORS.black};
        }
      `}
      />
      <Layout css={Grid}>
        {users.items.length ? (
          children
        ) : (
          <Preloader />
        )}
      </Layout>
    </div>
  );
};

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
