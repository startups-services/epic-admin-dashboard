/* eslint-disable no-underscore-dangle */
import CreatableSelect from 'react-select/creatable';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import COLORS from '../constants';
import { createNewTag, getAllTags } from '../../redux/tags/actions';
import { addTagToProject, addTagToProjectRedux, deleteTagFromProject } from '../../redux/projects/actions';

const tagStyles = {
  control: (styles) => ({ ...styles, backgroundColor: 'white', borderColor: COLORS.gray2 }),
  placeholder: (styles) => ({
    ...styles,
  }),
  multiValue: (styles) => ({
    ...styles,
    backgroundColor: 'none',
    border: `1px solid ${COLORS.orange2}`,
  }),
  multiValueLabel: (styles) => ({
    ...styles,
    fontSize: '10px',
    lineHeight: '12px',
    textAlign: 'center',
    letterSpacing: '1.5px',
    color: COLORS.orange2,
    padding: '8px 7px 7px 10px',
    paddingLeft: '10px',
  }),
  multiValueRemove: (styles) => ({
    ...styles,
    color: COLORS.orange2,
    cursor: 'pointer',
    ':hover': {
      backgroundColor: COLORS.red,
      color: 'white',
    },
  }),
};

const translateToSelectFormat = (arr) => (arr.map((elem) => {
  const translatedElem = { ...elem };
  if (!translatedElem.value) {
    translatedElem.value = elem.name;
  }
  if (!translatedElem.label) {
    translatedElem.label = elem.name;
  }

  return translatedElem;
})
);
const TagsEditorNEW = ({ tags, projectId }) => {
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
        newTag = currTags.find((elem) => (elem.__isNew__ === true));
      }

      if (newTag && newTag.__isNew__) {
        (async () => {
          const createTag = await dispatch(createNewTag(projectId, newTag.value));
          dispatch(addTagToProjectRedux(projectId, createTag));
          currTags[currTags.length - 1] = createTag; // eslint-disable-line no-param-reassign
        })();
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
        value={translateToSelectFormat(value || [])}
        options={translateToSelectFormat(allTags || [])}
        styles={tagStyles}
      />
    </>
  );
};

TagsEditorNEW.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  tags: PropTypes.array.isRequired,
  projectId: PropTypes.string.isRequired,
};

export default TagsEditorNEW;
