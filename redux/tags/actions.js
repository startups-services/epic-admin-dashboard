import { ADD_TAG_TO_ALL_TAGS, DELETE_TAG_FROM_ALL_TAGS, SET_ALL_TAGS } from './constants';
import execQuery from '../../data/graphql/client';
import { createNewTagQ, deleteTagQ, getAllTagsQ } from '../../data/graphql/Tag';
import { addTagToProjectRedux } from '../projects/actions';

export const setAllTags = (tags) => ({
  type: SET_ALL_TAGS,
  tags,
});

export const addTagToAllTags = (tag) => ({
  type: ADD_TAG_TO_ALL_TAGS,
  tag,
});

export const deleteTagFromAllTags = (id) => ({
  type: DELETE_TAG_FROM_ALL_TAGS,
  id,
});

export const getAllTags = () => async (dispatch) => {
  const { allTags } = await execQuery(getAllTagsQ);
  dispatch(setAllTags(allTags));
  return allTags;
};

export const createNewTag = (projectId, name) => async (dispatch) => {
  const { createTag } = await execQuery(createNewTagQ, { projectId, name });
  dispatch(addTagToAllTags(createTag));
  return createTag;
};

export const deleteTag = (id) => async (dispatch) => {
  await execQuery(deleteTagQ, { id });
  dispatch(deleteTagFromAllTags(id));
};

export const createTag = (projectId, newTag, currTags) => async (dispatch) => {
  const createdTag = await dispatch(createNewTag(projectId, newTag.value));
  dispatch(addTagToProjectRedux(projectId, createdTag));
  currTags[currTags.length - 1] = createdTag; // eslint-disable-line no-param-reassign
};
