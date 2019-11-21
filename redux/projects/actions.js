import execQuery, { isomorphicRedirectToLogin } from '../../data/graphql/client';
import { SET_INITIAL_PROJECTS, SET_PROJECT_FIELD } from './constants';
import { getProjectsQuery } from '../../data/graphql';
import { updateProjectQueries } from '../../data/graphql/Project';

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

export const getInitialProjects = (token, res) => async (dispatch, getState) => {
  if (token) {
    const projects = await execQuery(getProjectsQuery);
    if (!projects) {
      isomorphicRedirectToLogin(res);
    } else {
      const result = await dispatch(setInitialProjects(projects.allProjects));
      console.log(getState());
      debugger;
      //PAVLIK 1 in this line we have projects in store. We may check it by getState()
      return result;
      
    }
  }
};

export const setProjectField = (projectId, name, value) => async (dispatch) => {
  if (value || value === false || value === 0) {
    dispatch(setProjectFieldRedux(projectId, name, value));
    await execQuery(updateProjectQueries[name], { id: projectId, value });
  }
};
