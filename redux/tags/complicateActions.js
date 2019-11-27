// created because in actions i got cycle imports error

import { addTagToProjectRedux } from '../projects/actions';
import { createNewTag } from './actions';

export const createTag = (projectId, newTag, currTags) => async (dispatch) => {
  const createdTag = await dispatch(createNewTag(projectId, newTag.value));
  dispatch(addTagToProjectRedux(projectId, createdTag));
  currTags[currTags.length - 1] = createdTag; // eslint-disable-line no-param-reassign
};
