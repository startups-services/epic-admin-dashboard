/* eslint-disable no-underscore-dangle */
import CreatableSelect from 'react-select/creatable';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTag, getAllTags } from '../../redux/tags/actions';
import { addTagToProject, deleteTagFromProject } from '../../redux/projects/actions';
import tagsEditorStyles from './TagsEditorStyles';
import convertToSelectFormat from '../_Utility/convertToSelectFormat';

const TagsEditor = ({ tags, projectId }) => {
  const [value, setValue] = useState(tags);
  const dispatch = useDispatch();
  const allTags = useSelector((state) => state.tags.items);

  useEffect(() => {
    dispatch(getAllTags());
  }, []);


  const onChange = (currTags) => {
    setValue(((prevState) => {
      let newTag = null;
      if (!currTags) {
        if (prevState && prevState[0] && prevState[0].id) {
          dispatch(deleteTagFromProject(projectId, prevState[0].id));
        }
        return [];
      }
      if (prevState.length === 0) {
        // eslint-disable-next-line prefer-destructuring
        newTag = currTags[0]; // because currTag[0] is not iterable
      } else {
        newTag = currTags.find((elem) => elem.__isNew__);
      }

      if (newTag && newTag.__isNew__) {
        dispatch(createTag(projectId, newTag, currTags));
      } else if (prevState.length > currTags.length) {
        const deletedTag = prevState.find((elem, id) => (!currTags[id]));
        dispatch(deleteTagFromProject(projectId, deletedTag.id));
      } else if (prevState.length < currTags.length) {
        const addedTag = currTags.find((elem, id) => (!prevState[id]));
        dispatch(addTagToProject(projectId, addedTag));
      } else {
        // eslint-disable-next-line no-console
        console.error('Error: impossible situation');
      }
      return currTags;
    }));
  };
  return (
    <>
      <CreatableSelect
        isClearable
        isMulti
        onChange={onChange}
        value={convertToSelectFormat(value || [])}
        options={convertToSelectFormat(allTags || [])}
        styles={tagsEditorStyles}
      />
    </>
  );
};

TagsEditor.propTypes = {
  tags: PropTypes.array.isRequired,
  projectId: PropTypes.string.isRequired,
};

export default TagsEditor;
