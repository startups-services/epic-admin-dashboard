import React from 'react';
import PropTypes from 'prop-types';
import Tag from './Tag';
import { removeTagFromProject } from '../../data/graphql/Tag';

const TagsWithDelete = ({ tags, projectId }) => (
  <>
    {tags.map((tag) => (
      <Tag
        key={tag.id}
        label={tag.name}
        onClick={async () => { await removeTagFromProject({ allTags: tags, projectId, tagName: tag.name }); }}
      />
    ))}
  </>
);

TagsWithDelete.propTypes = {
  tags: PropTypes.array.isRequired,
  projectId: PropTypes.string.isRequired,
};

export default TagsWithDelete;
