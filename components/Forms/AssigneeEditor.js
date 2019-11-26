import React from 'react';
import { useSelector } from 'react-redux';
import AssigneeForm from './AssigneeForm';
import AssigneeItem from './AssigneeItem';

const AssigneeEditor = ({ projectUsers }) => {
  const users = useSelector((store) => store.users.items);
  return (
    <>
      {projectUsers.map((projUser) => (
        <AssigneeForm
          size="48px"
          options={users.map((user) => (
            { value: user.id, label: <AssigneeItem email={user.email} name={user.name ? user.name : user.email} /> }
          ))}
          onChange={(val) => {}}
          value={{ value: projUser.id, label: <AssigneeItem email={projUser.email} name={projUser.name} /> }}
        />
      ))}

    </>
  );
};

export default AssigneeEditor;
