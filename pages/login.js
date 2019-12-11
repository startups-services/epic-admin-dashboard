// remove this page if you use auth0

import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { css, Global } from '@emotion/core';
import styled from '@emotion/styled';
import Router from 'next/router';
import COLORS, { COOKIE_TOKEN_NAME } from '../components/constants';
import Card from '../components/Cards/Card';
import Input from '../components/Inputs/Input';
import Label from '../components/Labels/Label';
import Button from '../components/Buttons/Button';

const LoginLayout = styled.div`
  background: #F4F7FC;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginFormBox = styled.div`
  width: 400px;
`;

const LoginForm = styled.div`
  align-items: center;
  margin-bottom: 30px;
  & div[class*="-LabelStyled"] {
    text-align: center;
    margin-bottom: 30px;
  }
   & div[class*="-InputContainer"] {
    margin-bottom: 15px;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const FormToggler = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;

const ErrorBox = styled.div`
  text-align: right;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  /* identical to box height */
  letter-spacing: 0.4px;
  color: ${COLORS.red};
  mix-blend-mode: normal;
`;

const Index = () => {
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);
  const [errors, setErrors] = useState('');
  const [showSignIn, setShowSignIn] = useState(true);

  const toggleFormType = () => {
    setErrors('');
    setShowSignIn(!showSignIn);
  };

  // eslint-disable-next-line no-unused-vars
  const trySignInUser = async (email, password) => {
    const data = false; // get user data
    if (data) {
      setErrors('');
      setCookie(COOKIE_TOKEN_NAME, data.signinUser.token, { maxAge: 2592000 });
      await Router.push('/');
    } else {
      setErrors('Sorry, but you have error in login or password');
    }
  };

  const trySignUpUser = async (email, password) => {
    const data = false; // get user data
    if (data) {
      await trySignInUser(email, password);
    } else {
      setErrors('Sorry, but user already exists with that information');
    }
  };

  return (
    <>
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
        <LoginLayout>
          <LoginFormBox>
            <Card>
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  e.stopPropagation();

                  if (showSignIn) {
                    await trySignInUser(e.target[0].value, e.target[1].value);
                  } else {
                    await trySignUpUser(e.target[0].value, e.target[1].value);
                  }
                }}
              >
                <LoginForm>
                  <Label>Epic Admin Dashboard</Label>
                  <Input
                    ref={{}}
                    value=""
                    onChange={() => {}}
                    label="email"
                    name="email"
                  />
                  <Input
                    ref={{}}
                    value=""
                    onChange={() => {}}
                    label="password"
                    type="password"
                    name="password"
                  />
                  <ErrorBox>
                    {errors}
                  </ErrorBox>
                </LoginForm>
                <ButtonBox>
                  <Button
                    onClick={() => {
                    }}
                    background={COLORS.green1}
                    bordered={false}
                  >
                    {showSignIn ? (
                      'Sign In'
                    ) : (
                      'Sign Up'
                    )}
                  </Button>
                </ButtonBox>
              </form>
            </Card>
            <FormToggler onClick={toggleFormType}>
              {showSignIn ? (
                'Create new account ?'
              ) : (
                'Sign In here'
              )}

            </FormToggler>
          </LoginFormBox>
        </LoginLayout>

      </div>
    </>
  );
};

export default Index;
