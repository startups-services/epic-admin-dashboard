import { combineReducers } from 'redux';

import tags from './tags/reducer';
import activeUser from './activeUser/reducer';
import projects from './projects/reducer';
import users from './users/reducer';

export default combineReducers({
  tags, projects, activeUser, users,
});
