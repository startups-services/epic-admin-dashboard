import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import ToggleCheckBox from '../Inputs/ToggleCheckBox';

const PaddingY = '26px';

const SubscriptionToggleStyled = styled.div`
  width: calc(100% - ${PaddingY});
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px ${PaddingY};
  border-bottom: 1px solid #F5F4F6;
`;

const SubscriptionToggle = ({
  label, checked, name, onChange = () => {},
}) => (
  <SubscriptionToggleStyled>
    <div>
      {label}
    </div>
    <div>
      <ToggleCheckBox onChange={onChange} checked={checked} name={name} />
    </div>
  </SubscriptionToggleStyled>
);

SubscriptionToggle.propTypes = {
  label: PropTypes.any.isRequired,
  checked: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

SubscriptionToggle.defaultProps = {
  checked: false,
};

export default SubscriptionToggle;
