import execQuery from './client';

export const deleteTagFromProjectQ = `
  mutation (
    $tagId: ID!
    $projectId: ID!
  ) {
    removeFromProjectOnTag(
      tagsTagId: $tagId
      projectsProjectId: $projectId
    ) {
      projectsProject {
        id
        tags {
          id
          name
          projects {
            id
          }
        }
      }
      tagsTag {
        id
        projects {
          id
        }
      }
    }
  }
`;

export const addTagToProjectQ = `
   mutation (
    $tagId: ID!
    $projectId: ID!
  ) {
    addToProjectOnTag(
      tagsTagId: $tagId
      projectsProjectId: $projectId
    ) {
      projectsProject {
        id
        tags {
          id
          name
          projects {
            id
          }
        }
      }
      tagsTag {
        id
        projects {
          id
        }
      }
    }
  }
`;

export const getProjectsQuery = `
  query {
    allProjects {
      id
      name
      subLabel
      description
      tags {
        id
        name
        projects {
          id
        }
      }
      users {
        id
        name
        ava
        email
      }
      picture
      status
    }
  }
`;

export const updateProjectDescription = `
  mutation updateProject (
    $id: ID!
    $description: String
  ) {
    updateProject(id: $id, description: $description) {
      id
    }
  }
`;

export const updateTag = `
  mutation updateTag (
    $id: ID!
    $projectsIds: [ID!]!
  ) {
    updateTag(
      id: $id,
      projectsIds: $projectsIds
    ) {
      id
      projects {
        id
        name
      }
    }
  }
`;

export const createTag = `
  mutation createTag (
    $name: String!
    $projectsIds: [ID!]!
  ) {
    createTag(
      name: $name
      projectsIds: $projectsIds
      ) {
        id
        projects {
          id
          name
        }
      }
  }
`;


export const removeTagFromProject = async ({ tagName, allTags, projectId }) => {
  const result = allTags.filter((elem) => (elem.name === tagName));

  await execQuery(updateTag, {
    id: result[0].id,
    projectsIds: [...result[0].projects
      .filter(({ id }) => (id !== projectId))
      .map(({ id }) => (id))],
  });
};
