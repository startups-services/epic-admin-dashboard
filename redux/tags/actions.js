import { ADD_TAG_TO_ALL_TAGS, DELETE_TAG_FROM_ALL_TAGS, SET_ALL_TAGS } from './constants';
import fetchQuery from '../../data/graphql/client';
import {
  createNewTagQ, deleteTagQ, getAllTagsQ, getTagByIdQ,
} from '../../data/graphql/Tag';
// eslint-disable-next-line import/no-cycle
import { addTagToProjectRedux } from '../projects/actions';
import { realDataMsg } from '../../utils/toastActions';

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
  const { tags } = await fetchQuery(getAllTagsQ);
  dispatch(setAllTags(tags));
  return tags;
};

export const createNewTag = (projectId, name) => async (dispatch) => {
  realDataMsg();
  const { createTag } = await fetchQuery(createNewTagQ, { projectId, name });
  dispatch(addTagToAllTags(createTag));
  return createTag;
};

export const deleteTag = (id) => async (dispatch) => {
  await fetchQuery(deleteTagQ, { id });
  dispatch(deleteTagFromAllTags(id));
};

export const createTag = (projectId, newTag, currTags) => async (dispatch) => {
  const createdTag = await dispatch(createNewTag(projectId, newTag.value));
  dispatch(addTagToProjectRedux(projectId, createdTag));
  currTags[currTags.length - 1] = createdTag; // eslint-disable-line no-param-reassign
};

export const getTagByIdFromBD = (id) => async () => {
  const result = await fetchQuery(getTagByIdQ, { id });
  return result;
};
