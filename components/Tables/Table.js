import React from 'react';
import { useSelector } from 'react-redux';
import TableRow from './TableRow';
import TableHead from './TableHead';

const Table = () => {
  const projects = useSelector((state) => state.projects.items);

  return (
    <table cellSpacing="0" style={{ width: '100%' }}>
      <thead>
        <TableHead />
      </thead>
      <tbody>
        {projects.map((project) => (
          <TableRow
            userArray={project.users}
            percent={0}
            avatarLabel={project.name.charAt(0)}
            costs="2000$"
            name={project.name}
            status="progress"
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
