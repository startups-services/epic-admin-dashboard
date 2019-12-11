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
            key={project.name}
            userArray={project.projectUsers}
            percent={(Math.random() * 100).toFixed(0)}
            avatarLabel={project.name.charAt(0)}
            costs={`${project.costs} $`}
            name={project.name}
            status={project.status}
            id={project.id}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
