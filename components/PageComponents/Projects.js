import React from 'react';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import ProjectCard from '../Cards/ProjectCard';
import Masonry from '../Layout/Masonry';
import useWindowSize from '../../utils/hooks/useWindowSize';

const ItemBox = styled.div`
  display: inline-block;
  margin-bottom: 25px;
`;

const Projects = () => {
  const projects = useSelector(state => state.projects.items);

  const { width } = useWindowSize();
  return (
    <Masonry width={width}>
      {projects && projects.map(elem =>
        <ItemBox key={elem.name}>
          <ProjectCard
            label={elem.name}
            tags={elem.tags}
            src={elem.picture}
            description={elem.description}
            status={elem.status}
            users={elem.users}
            id={elem.id}
          />
        </ItemBox>,
      )}
    </Masonry>
  );
};
export default Projects;
