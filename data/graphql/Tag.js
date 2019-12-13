import fetchQuery from './client';

export const getAllTagsQ = `
  query{
    tags {
      name
      id
      projects {
        id
      }
    }
  }
`;

export const getTagByIdQ = `
  query getTagById (
    $id: ID!
  ){
    tag (
      where: {
        id: $id
      }
    ) {
      name
      id
      projects {
        id
      }
    }
  }
`;

export const createNewTagQ = `
  mutation (
    $projectId: ID!
    $name: String!
  ) {
    createTag(data:{name: $name,  projects: {connect: {id:$projectId }}  }) {
      id
      name
      projects{
        id
      }
    }
  }
`;

export const createNewTagWithoutProjectQ = `
  mutation (
    $name: String!
  ) {
    createTag(data: {name: $name}) {
      id
      name
    }
  }
`;

export const deleteTagQ = `
  mutation (
    $id: ID!
  ) {
    deleteTag(where: {id:$id}) {
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
      where: {
        id: $id,
      }
      data: {
        projectsIds: $projectsIds
      }
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
      data: {
        name: $name
        projectsIds: $projectsIds
      }
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

  await fetchQuery(updateTag, {
    id: result[0].id,
    projectsIds: [...result[0].projects
      .filter(({ id }) => (id !== projectId))
      .map(({ id }) => (id))],
  });
};
