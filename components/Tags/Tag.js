import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import COLORS from '../constants';
import { htmlOnlyMsg } from '../../utils/toastActions';


const TagStyled = styled.button`
  background: ${COLORS.white};
  border: 1px solid ${({ color }) => color};
  box-sizing: border-box;
  border-radius: 3px;
  cursor: pointer;
  margin: 0 10px 10px 0;
  display: inline-block;
  `;

const Label = styled.div`
  font-size: 10px;
  line-height: 12px;
  /* identical to box height */
  text-align: center;
  letter-spacing: 1.5px;
  color: ${({ color }) => color};
  padding: 7px 8px;
`;


const Tag = (
  {
    label,
    onClick,
    color = COLORS.green3,
  },
) => (
  <TagStyled onClick={onClick || htmlOnlyMsg} color={color}>
    <Label color={color}>
      {label}
    </Label>
  </TagStyled>
);

Tag.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string,
};

Tag.defaultProps = {
  label: '',
  color: COLORS.green3,
};

export default Tag;
