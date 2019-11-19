import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import COLORS from '../constants';

const ButtonStyled = styled.button`
    background: ${({ background }) => background};
    border: ${({ bordered }) => (bordered ? `1px solid ${COLORS.black}` : 'none')};
    box-sizing: border-box;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0 10px 0 10px;
  `;

const MessageButtonLabel = styled.div`
  text-align: center;
  color: ${({ textColor }) => (textColor || COLORS.gray)};
  font-weight: normal;
  font-size: 10px;
  height: 26px;
  line-height: 12px;
  /* identical to box height */
  display: flex;
  align-items: center;
  letter-spacing: 1.5px;
`;

const MessageButton = ({
  children,
  background = COLORS.white,
  textColor = COLORS.gray,
  onClick,
}) => (
  <ButtonStyled background={background} onClick={onClick}>
    <MessageButtonLabel textColor={textColor}>
      {children}
    </MessageButtonLabel>
  </ButtonStyled>
);

MessageButton.propTypes = {
  background: PropTypes.string,
  textColor: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

MessageButton.defaultProps = {
  background: COLORS.white,
  textColor: COLORS.gray,
  onClick: () => {},
};

export default MessageButton;
