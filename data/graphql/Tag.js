export const getAllTagsQ = `
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

export const createNewTagQ = `
  mutation (
    $projectId: ID!
    $name: String!
  ) {
    createTag(name: $name, projectsIds: [$projectId]) {
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
    createTag(name: $name) {
      id
      name
    }
  }
`;

export const deleteTagQ = `
  mutation (
    $id: ID!
  ) {
    deleteTag(id:$id) {
      id
    }
  }
`;
