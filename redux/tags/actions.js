import { GET_ALL_TAGS } from './constants';

export const getAllTags = tags => ({
  type: GET_ALL_TAGS,
  tags,
});
