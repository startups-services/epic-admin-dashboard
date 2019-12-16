import React from 'react';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import ProjectCard from '../Cards/ProjectCard';
import Masonry from '../Layout/Masonry';
import useWindowSize from '../../utils/hooks/useWindowSize';
import COLORS from '../constants';
import Icon from '../Icons/Icon';
import { imgRandomizer } from '../_Utility/dataFillers';

const ItemBox = styled.div`
  display: inline-block;
  margin-bottom: 25px;
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 15px;
`;

const AddButton = styled.div`
  height: 52px;
  width: 52px;
  border-radius: 16px;
  background-color: ${COLORS.pink};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Projects = () => {
  const projects = useSelector((state) => state.projects.items);
  const { width } = useWindowSize();
  return (
    <>
      <TopContainer>
        <Link href="/create-project" as="/create-project">
          <AddButton>
            <Icon iconName="plus" height="20px" />
          </AddButton>
        </Link>
      </TopContainer>
      <Masonry width={width}>
        {projects && projects.map((elem) => (
          <ItemBox key={elem.name}>
            <ProjectCard
              label={elem.name}
              tags={elem.tags}
              src={imgRandomizer()}
              description={elem.description}
              status={elem.projectStatus}
              users={elem.projectUsers}
              id={elem.id}
            />
          </ItemBox>
        ))}
      </Masonry>
    </>
  );
};
export default Projects;
