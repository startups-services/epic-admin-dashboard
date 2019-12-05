import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import AssigneeForm from './AssigneeForm';
import AssigneeItem from './AssigneeItem';

const AssigneeEditor = ({ projectUsers, addAssignee, removeAssignee }) => {
  const users = useSelector((store) => store.users.items);

  const onChange = (val) => {
    if (val.value) {
      addAssignee(val);
    } else {
      removeAssignee(val);
    }
  };

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

  return (
    <>
      {projectUsers.map((projUser, key) => (
        <AssigneeForm
          key={projUser.email}
          size="48px"
          options={userOptions(key)}
          onChange={onChange}
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
        onChange={onChange}
        controlShouldRenderValue
      />
    </>
  );
};

AssigneeEditor.propTypes = {
  projectUsers: PropTypes.array.isRequired,
  addAssignee: PropTypes.func.isRequired,
  removeAssignee: PropTypes.func.isRequired,
};

export default AssigneeEditor;
