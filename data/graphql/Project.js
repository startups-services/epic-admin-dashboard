export const updateProjectQueries = {};

updateProjectQueries.name = `
  mutation (
    $id: ID!
    $value: String!
  ) {
    updateProject(id: $id, name: $value) {
      id
      name
    }
  }
`;

updateProjectQueries.subLabel = `
  mutation (
    $id: ID!
    $value: String!
  ) {
    updateProject(id: $id, subLabel: $value) {
      id
      subLabel
    }
  }
`;

updateProjectQueries.dueDate = `
  mutation (
    $id: ID!
    $value: String!
  ) {
    updateProject(id: $id, dueDate: $value) {
      id
      dueDate
    }
  }
`;

updateProjectQueries.startDate = `
  mutation (
    $id: ID!
    $value: String!
  ) {
    updateProject(id: $id, startDate: $value) {
      id
      startDate
    }
  }
`;

updateProjectQueries.costs = `
  mutation (
    $id: ID!
    $value: String!
  ) {
    updateProject(id: $id, costs: $value) {
      id
      costs
    }
  }
`;

export const createProjectQ = `
  mutation (
    $name: String!
    $description: String!
    $tagsIds: [ID!]
    $subLabel: String
    $costs: String
    $usersIds: [ID!]
    $startDate: String
    $dueDate: String
  ) {
    createProject (
      name: $name
      description: $description
      tagsIds: $tagsIds
      subLabel: $subLabel
      costs: $costs
      usersIds: $usersIds
      startDate: $startDate
      dueDate: $dueDate
    ) {
      name,
      costs,
      dueDate,
      startDate,
      description,
      id,
      status,
      subLabel,
      tags {
        id
      }
      users {
        id
        name
      }
    }
  }
`;
