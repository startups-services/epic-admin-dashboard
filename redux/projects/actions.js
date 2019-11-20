import execQuery from '../../data/graphql/client';
import { SET_INITIAL_PROJECTS, SET_PROJECT_FIELD } from './constants';

import { getProjectsQuery } from '../../data/graphql';
import { updateUserQueries } from '../../data/graphql/User';
import { setUserFieldRedux } from '../activeUser/actions';

export const setInitialProjects = (projects) => ({
  type: SET_INITIAL_PROJECTS,
  projects,
});

export const setProjectFieldRedux = (id, field, value) => ({
  type: SET_PROJECT_FIELD,
  id,
  field,
  value,
});

export const getInitialProjects = (token) => async (dispatch) => {
  if (token) {
    const projects = await execQuery(getProjectsQuery);
    return await dispatch(setInitialProjects(projects.allProjects));
  }
};

export const setProjectField = (projectId, name, value) => async (dispatch, getState) => {
  if (value || value === false || value === 0) {
    dispatch(setProjectFieldRedux(projectId, name, value));

    const { activeUser: { data: { id } } } = getState();
    await execQuery(updateUserQueries[name], { id, value });
  }
};
