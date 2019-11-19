import React from 'react';
import { action } from '@storybook/addon-actions';
import Tag from './Tag';

const Tags = ({ tags }) => (
  <>
    {tags.map(tag => (
      <Tag key={tag.id} label={tag.name} onClick={action('clicked')} />
    ))}
  </>
);

export default Tags;
