import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { addUserToProject, deleteUserFromProject, setProjectField } from '../../redux/projects/actions';
import AssigneeEditor from './AssigneeEditor';


const AssigneeEditorWithDB = ({ projectId, projectUsers }) => {
  const dispatch = useDispatch();

  const updateExistingAssignee = (val) => {
    debugger;
    if (val.value) {
      const newUsers = [...projectUsers];
      newUsers[val.projUserKey] = val.user;
      dispatch(setProjectField(projectId, 'users', newUsers));
      dispatch(addUserToProject(projectId, val.user.id));
      if (projectUsers[val.projUserKey]) {
        dispatch(deleteUserFromProject(projectId, projectUsers[val.projUserKey].id));
      }
    } else {
      const newUsers = [...projectUsers];
      newUsers.splice(val.projUserKey, 1);
      dispatch(setProjectField(projectId, 'users', newUsers));
      dispatch(deleteUserFromProject(projectId, projectUsers[val.projUserKey].id));
    }
  };

  return (
    <>
      <AssigneeEditor projectUsers={projectUsers} onChange={updateExistingAssignee} />
    </>
  );
};

AssigneeEditorWithDB.propTypes = {
  projectId: PropTypes.string.isRequired,
  projectUsers: PropTypes.array.isRequired,
};

export default AssigneeEditorWithDB;
