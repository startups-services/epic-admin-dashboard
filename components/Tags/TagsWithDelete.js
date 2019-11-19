import React from 'react';
import Tag from './Tag';
import { removeTagFromProject } from '../../data/graphql';

const TagsWithDelete = ({ tags, projectId }) => (
    <>
      {tags.map(tag => (
        <Tag
          key={tag.id}
          label={tag.name}
          onClick={async () => { removeTagFromProject({ allTags: tags, projectId, tagName: tag.name }); }}
        />
      ))}
    </>
);
export default TagsWithDelete;
