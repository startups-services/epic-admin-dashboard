import React, { useState } from 'react';
import styled from '@emotion/styled';
import TagsInput from './TagsInput';
import TagsWithDelete from './TagsWithDelete';


const TagsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const TagsEditor = ({ tags, projectId }) => {

  const [tagsState, setTagsState] = useState(tags);
  return (
    <TagsBox>
      <TagsWithDelete tags={tagsState} projectId={projectId} />
      <TagsInput setTagsState={setTagsState} projectId={projectId} />
    </TagsBox>
  );
};

export default TagsEditor;
