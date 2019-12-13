import fetchQuery from '../../data/graphql/client';
import { ADD_TAG_TO_PROJECT, SET_INITIAL_PROJECTS, SET_PROJECT_FIELD } from './constants';
import {
  connectTagToProjQ,
  createProjectQFunc,
  disconnectTagFromProjQ,
  getProjectsQ,
  updateProjectQueries,
} from '../../data/graphql/Project';
// eslint-disable-next-line import/no-cycle
import { deleteTag, getTagByIdFromBD } from '../tags/actions';
import { realDataMsg } from '../../utils/toastActions';
import { createNewTagWithoutProjectQ } from '../../data/graphql/Tag';
import { addUserToProjectQ, deleteUserFromProjectQ } from '../../data/graphql/User';

export const setInitialProjects = (projects) => ({
  type: SET_INITIAL_PROJECTS,
  projects,
});

export const addTagToProjectRedux = (id, tag) => ({
  type: ADD_TAG_TO_PROJECT,
  id,
  tag,
});

export const addUserToProjectRedux = (id, tag) => ({
  type: ADD_TAG_TO_PROJECT,
  id,
  tag,
});

export const setProjectFieldRedux = (id, field, value) => ({
  type: SET_PROJECT_FIELD,
  id,
  field,
  value,
});

export const getInitialProjects = (token) => async (dispatch) => {
  if (token) {
    const { projects } = await fetchQuery(getProjectsQ);
    if (projects) {
      const result = await dispatch(setInitialProjects(projects));
      return result;
    }
  }
  return {};
};

export const setProjectField = (projectId, name, value) => async (dispatch) => {
  realDataMsg();
  if (value || value === false || value === 0) {
    dispatch(setProjectFieldRedux(projectId, name, value));
    await fetchQuery(updateProjectQueries[name], { id: projectId, value });
  }
};

export const deleteTagFromProject = (projectId, tagId) => async (dispatch) => {
  realDataMsg();
  const { updateProject } = await fetchQuery(
    disconnectTagFromProjQ, { projectId, tagId },
  );
  await dispatch(setProjectFieldRedux(projectId, 'tags', updateProject.tags));
  const tag = await dispatch(getTagByIdFromBD(tagId));
  if (tag && tag.tag.projects.length === 0) {
    dispatch(deleteTag(tagId));
  }
};

export const addTagToProject = (projectId, tag) => async (dispatch) => {
  realDataMsg();
  dispatch(addTagToProjectRedux(projectId, tag));
  await fetchQuery(connectTagToProjQ, { projectId, tagId: tag.id });
};

export const addUserToProject = (projectId, userId) => async () => {
  await fetchQuery(addUserToProjectQ, { projectId, userId });
};

export const deleteUserFromProject = (projectId, userId) => async () => {
  await fetchQuery(deleteUserFromProjectQ, { projectId, userId });
};

export const createProject = ({
  name, description, tags, subLabel, costs, users, startDate, dueDate,
}) => async (dispatch, getState) => {
  const tagsWithNewElems = await Promise.all(tags.map(async (elem) => {
    if (elem.id) {
      return elem;
    }
    const { createTag } = await fetchQuery(
      createNewTagWithoutProjectQ,
      { name: elem.label },
    );
    return { id: createTag.id };
  }));

  realDataMsg();
  const result = await fetchQuery(createProjectQFunc(tagsWithNewElems.map((e) => e.id), users.map((e) => e.id)), {
    name,
    description,
    subLabel,
    costs,
    startDate,
    dueDate,
  });
  if (result && result.createProject) {
    const state = getState();
    dispatch(setInitialProjects([...state.projects.items, result.createProject]));
  }
};
