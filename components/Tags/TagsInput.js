import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import fetchQuery from '../../data/graphql/client';
import Icon from '../Icons/Icon';
import { createTag, updateTag } from '../../data/graphql/Tag';

const EditButtonBox = styled.div`
  //height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 10px;
`;

const TagInputStyled = styled.input`
  background: #FFF;
  border: 1px solid #32DC9B;
  box-sizing: border-box;
  border-radius: 3px;
  margin: 0 10px 10px 0;
  display: inline-block;
  padding: 7px 8px;
`;

const TagsInput = ({ setTagsState, projectId }) => {
  const inputEl = useRef(null);
  const [show, setShow] = useState(false);
  const allTags = useSelector((state) => state.tags.items);

  const updateOrCreateTag = async (newTagName) => {
    const result = allTags.filter((elem) => elem.name === newTagName);
    setShow(false);
    if (result.length > 0) {
      setTagsState((prev) => ([...prev, { id: result[0].id, name: newTagName }]));
      await fetchQuery(updateTag, {
        id: result[0].id,
        name: newTagName,
        projectsIds: [...result[0].projects.map((elem) => elem.id), projectId],
      });
    } else {
      const { createTag: { id } } = await fetchQuery(createTag, { name: newTagName, projectsIds: [projectId] });
      setTagsState((prev) => ([...prev, { id, name: newTagName }]));
    }
  };

  useEffect(() => {
    if (!inputEl.current) return;
    inputEl.current.focus();
  }, [show]);

  return (
    <>
      {show ? (
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            e.stopPropagation();
            await updateOrCreateTag(e.target[0].value);
          }}
        >
          <TagInputStyled ref={inputEl} type="text" placeholder="add tag" onBlur={() => setShow(false)} />
        </form>
      ) : (
        <EditButtonBox onClick={() => { setShow(true); }}>
          <Icon iconName="addTag" />
        </EditButtonBox>
      )}
    </>
  );
};

TagsInput.propTypes = {
  setTagsState: PropTypes.func.isRequired,
  projectId: PropTypes.string.isRequired,
};

export default TagsInput;
