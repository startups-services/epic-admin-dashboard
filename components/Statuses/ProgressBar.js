import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import COLORS from '../constants';

const BarContainer = styled.div`
  width: 100%;
`;

const OuterBar = styled.div`
  background: linear-gradient(90deg, #F7D398 0%, #FDA740 39.04%, #FF544F 100%);
  border-radius: 5.5px;
  height: 11px;
  display: flex;
  align-items: center;

`;

const InnerBar = styled.div`
  width: calc(${({ percent }) => `${percent}%`} - 2px);
  height: 9px;
  margin-left: 1px;
  margin-right: 1px;
  background-color: ${COLORS.white};
  border-radius: 5.5px;
`;


const ProgressBar = ({ percent }) => (
  <BarContainer>
    <OuterBar>
      <InnerBar percent={percent} />
    </OuterBar>
  </BarContainer>
);

ProgressBar.propTypes = {
  percent: PropTypes.string.isRequired,
};

export default ProgressBar;
