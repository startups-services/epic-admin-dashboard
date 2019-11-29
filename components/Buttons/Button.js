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
  height: ${({ height }) => height};
`;

const Label = styled.div`
  padding: 13px 42px;
  text-align: center;
`;

const Button = ({
  children,
  background = COLORS.white,
  bordered = true,
  onClick,
  height = '42px',
}) => (
  <ButtonStyled background={background} bordered={bordered} onClick={onClick} height={height}>
    <Label>
      {children}
    </Label>
  </ButtonStyled>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  background: PropTypes.string,
  bordered: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  height: PropTypes.string,
};

Button.defaultProps = {
  background: COLORS.white,
  bordered: true,
  height: '42px',
};

export default Button;
