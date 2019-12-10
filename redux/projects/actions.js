import execQuery from '../../data/graphql/client';
import { ADD_TAG_TO_PROJECT, SET_INITIAL_PROJECTS, SET_PROJECT_FIELD } from './constants';
import { createProjectQ, getProjectsQ, updateProjectQueries } from '../../data/graphql/Project';
// eslint-disable-next-line import/no-cycle
import { deleteTag } from '../tags/actions';
import { realDataMsg } from '../../utils/toastActions';
import { addTagToProjectQ, createNewTagWithoutProjectQ, deleteTagFromProjectQ } from '../../data/graphql/Tag';
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
    const { projects } = await execQuery(getProjectsQ);
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
    await execQuery(updateProjectQueries[name], { id: projectId, value });
  }
};

export const deleteTagFromProject = (projectId, tagId) => async (dispatch) => {
  realDataMsg();
  const { removeFromProjectOnTag: { projectsProject, tagsTag } } = await execQuery(
    deleteTagFromProjectQ, { projectId, tagId },
  );
  dispatch(setProjectFieldRedux(projectId, 'tags', projectsProject.tags));
  if (projectsProject && projectsProject.tags && projectsProject.tags.length === 0) {
    dispatch(deleteTag(tagsTag.id));
  }
};

export const addTagToProject = (projectId, tag) => async (dispatch) => {
  realDataMsg();
  dispatch(addTagToProjectRedux(projectId, tag));
  await execQuery(addTagToProjectQ, { projectId, tagId: tag.id });
};

export const addUserToProject = (projectId, userId) => async () => {
  await execQuery(addUserToProjectQ, { projectId, userId });
};

export const deleteUserFromProject = (projectId, userId) => async () => {
  await execQuery(deleteUserFromProjectQ, { projectId, userId });
};

export const createProject = ({
  name, description, tags, subLabel, costs, users, startDate, dueDate,
}) => async () => {
  const tagsWithNewElems = await Promise.all(tags.map(async (elem) => {
    if (elem.id) {
      return elem;
    }
    const { createTag } = await execQuery(
      createNewTagWithoutProjectQ,
      { name: elem.label },
    );
    return { id: createTag.id };
  }));

  realDataMsg();
  await execQuery(createProjectQ, {
    name,
    description,
    tagsIds: tagsWithNewElems.map((e) => e.id),
    subLabel,
    costs,
    usersIds: users.map((e) => e.id),
    startDate,
    dueDate,
  });
};
