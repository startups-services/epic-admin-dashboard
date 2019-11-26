import React from 'react';
import PropTypes from 'prop-types';
import { action } from '@storybook/addon-actions';
import Tag from './Tag';

const Tags = ({ tags, color }) => (
  <>
    {tags.map((tag) => (
      <Tag key={tag.id} label={tag.name} onClick={action('clicked')} color={color} />
    ))}
  </>
);

Tags.propTypes = {
  tags: PropTypes.array.isRequired,
  color: PropTypes.string,
};

Tags.defaultProps = {
  color: undefined,
};

export default Tags;
