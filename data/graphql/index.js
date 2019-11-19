import execQuery from './client';

export const getProjectTags = `
  query{
    allTags {
      name
      id
      projects {
        id
      }
    }
  }
`;


export const getProjectsQuery = `
  query {
    allProjects {
      id
      name
      description
      tags {
        id
        name
        projects {
          id
          name
        }
      }
      users {
        id
        name
        ava
      }
      picture
      status
    }
  }
`;

export const getProjectById = `
  query getProjectById(
    $id: ID!
  ) {
    Project(id: $id) {
      id
      name
      description
      tags {
        id
        name
        projects {
          id
          name
        }
      }
      users {
        id
        name
        ava
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
  const result = allTags.filter(elem => (elem.name === tagName));

  await execQuery(updateTag, {
    id: result[0].id,
    projectsIds: [...result[0].projects.filter(({ id }) => (id !== projectId)).map(({ id }) => (id))],
  });
};
