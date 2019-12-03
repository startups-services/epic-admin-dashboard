import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Icon from '../Icons/Icon';

const StyledLink = styled.a`
  padding: 0 0 40px 0;
  text-decoration: none;
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const IconBoxBefore = styled.div`
  display: inline-block;
  margin-right: 20px;
  width: 16px;
`;

const IconBoxAfter = styled.div`
  display: inline-flex;
  margin-left: 8px;
`;

const LinkLabel = styled.div`
  display: inline-block;
  height: 16px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: 0.25px;
`;

const LeftBarLink = ({
  href, iconName, label, dropDown = false,
}) => (
  <Link href={href}>
    <StyledLink>
      <IconBoxBefore>
        <Icon iconName={iconName} />
      </IconBoxBefore>
      <LinkLabel>
        {`${label}`}
      </LinkLabel>
      { dropDown && (
        <IconBoxAfter>
          <Icon iconName="dropDownMenu" height="7px" />
        </IconBoxAfter>
      )}
    </StyledLink>
  </Link>
);

LeftBarLink.propTypes = {
  href: PropTypes.string.isRequired,
  iconName: PropTypes.string,
  label: PropTypes.string.isRequired,
  dropDown: PropTypes.bool,
};

LeftBarLink.defaultProps = {
  iconName: 'close',
  dropDown: false,
};

export default LeftBarLink;
