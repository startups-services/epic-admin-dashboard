import { GET_INITIAL_PROJECTS } from './constants';

export const getInitialProjects = projects => ({
  type: GET_INITIAL_PROJECTS,
  projects,
});
