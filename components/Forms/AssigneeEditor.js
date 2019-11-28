import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import AssigneeForm from './AssigneeForm';
import AssigneeItem from './AssigneeItem';
import { addUserToProject, deleteUserFromProject, setProjectField } from '../../redux/projects/actions';


const AssigneeEditor = ({ projectId, projectUsers }) => {
  const users = useSelector((store) => store.users.items);
  const dispatch = useDispatch();

  const userOptions = (projUserKey, deletable = true) => {
    const unusedUsers = users
      .filter((elem) => !projectUsers
        .find((prjUser) => elem.id === prjUser.id));
    const options = unusedUsers.map((user) => (
      {
        value: user.id,
        label: <AssigneeItem email={user.email} name={user.name ? user.name : user.email} />,
        user,
        projUserKey,
      }

    ));
    if (deletable) {
      options.unshift({ value: false, label: 'unset assignee', projUserKey });
    }


    return options;
  };

  const updateExistingAssignee = (val) => {
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
      {projectUsers.map((projUser, key) => (
        <AssigneeForm
          key={projUser.email}
          size="48px"
          options={userOptions(key)}
          onChange={updateExistingAssignee}
          value={{
            value: projUser.id,
            label: <AssigneeItem email={projUser.email} name={projUser.name} />,
          }}
        />
      ))}
      <AssigneeForm
        key={Date()}
        size="48px"
        options={userOptions(projectUsers.length, false)}
        onChange={updateExistingAssignee}
        controlShouldRenderValue
      />
    </>
  );
};

AssigneeEditor.propTypes = {
  projectId: PropTypes.string.isRequired,
  projectUsers: PropTypes.array.isRequired,
};

export default AssigneeEditor;
