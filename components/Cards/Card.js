import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

export const cardPadding = '40px';
export const cardBoardRadius = '20px';

const CardStyled = styled.div`
  box-shadow: 0 10px 10px rgba(198, 203, 207, 0.25265);
  border-radius: ${cardBoardRadius};
  padding: ${cardPadding};
  background: #FFF;
  display: flex;
  flex-basis: 100%;
  justify-content: center;
  flex-direction: column;
`;

const Card = ({ children }) => (
  <CardStyled>
    {children}
  </CardStyled>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
