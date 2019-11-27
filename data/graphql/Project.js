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
