import execQuery, { isomorphicRedirectToLogin } from '../../data/graphql/client';
import { ADD_TAG_TO_PROJECT, SET_INITIAL_PROJECTS, SET_PROJECT_FIELD } from './constants';
import { deleteTagFromProjectQ, getProjectsQuery } from '../../data/graphql';
import { updateProjectQueries } from '../../data/graphql/Project';
import { deleteTag } from '../tags/actions';

export const setInitialProjects = (projects) => ({
  type: SET_INITIAL_PROJECTS,
  projects,
});

export const addTagToProject = (id, tag) => ({
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

export const getInitialProjects = (token, res) => async (dispatch) => {
  if (token) {
    const projects = await execQuery(getProjectsQuery);
    if (!projects) {
      isomorphicRedirectToLogin(res);
    } else {
      const result = await dispatch(setInitialProjects(projects.allProjects));
      return result;
    }
  }
  return {};
};

export const setProjectField = (projectId, name, value) => async (dispatch) => {
  if (value || value === false || value === 0) {
    dispatch(setProjectFieldRedux(projectId, name, value));
    await execQuery(updateProjectQueries[name], { id: projectId, value });
  }
};

export const deleteTagFromProject = (projectId, tagId) => async (dispatch) => {
  const { removeFromProjectOnTag: { projectsProject, tagsTag } } = await execQuery(
    deleteTagFromProjectQ, { projectId, tagId },
  );
  dispatch(setProjectFieldRedux(projectId, 'tags', projectsProject.tags));
  if (projectsProject && projectsProject.tags && projectsProject.tags.length === 0) {
    dispatch(deleteTag(tagsTag.id));
  }
};
