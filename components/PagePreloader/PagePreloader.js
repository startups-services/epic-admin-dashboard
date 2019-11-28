import React from 'react';
import styled from '@emotion/styled';
import Icon from '../Icons/Icon';

const PreloaderContainer = styled.div`
  height: 100%;
  width: 100%;
    display: flex;
  align-items: center;
  justify-content: center;

`;

const Preloader = () => (
  <PreloaderContainer>
    <Icon iconName="preloader" height="100px" />
  </PreloaderContainer>
);

export default Preloader;
