import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AssigneeForm from './AssigneeForm';
import AssigneeItem from './AssigneeItem';
import { addUserToProject, deleteUserFromProject, setProjectField } from '../../redux/projects/actions';
import { deleteUserFromProjectQ } from '../../data/graphql';

const AssigneeEditor = ({ projectId, projectUsers }) => {
  const users = useSelector((store) => store.users.items);
  const dispatch = useDispatch();

  const userOptions = (projectUsersKey) => {
    const options = users.map((user, key) => (
      {
        value: user.id,
        label: <AssigneeItem email={user.email} name={user.name ? user.name : user.email} />,
        user,
        projUserKey: projectUsersKey,
      }

    ));
    options.unshift({ value: false, label: 'unset assignee', projUserKey: projectUsersKey });

    return options;
  };

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
      {projectUsers.map((projUser, key) => (
        <AssigneeForm
          size="48px"
          options={userOptions(key)}
          onChange={updateExistingAssignee}
          value={{ value: projUser.id, label: <AssigneeItem email={projUser.email} name={projUser.name} /> }}
        />
      ))}
      <AssigneeForm
        size="48px"
        options={userOptions(projectUsers.length)}
        onChange={updateExistingAssignee}
        controlShouldRenderValue
      />
    </>
  );
};

export default AssigneeEditor;
