export const updateProjectQueries = {};

updateProjectQueries.name = `
  mutation (
    $id: ID!
    $value: String!
  ) {
    updateProject(
      data:{
        name: $value
      },
      where: {
        id: $id
      }
    )
    {
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
     updateProject(
      data:{
        subLabel: $value
      },
      where: {
        id: $id
      }
    ) {
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
    updateProject(
      data:{
        dueDate: $value
      },
      where: {
        id: $id
      }
    ) {
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
    updateProject(
      data:{
        startDate: $value
      },
      where: {
        id: $id
      }
    ) {
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
    updateProject(
      data:{
        costs: $value
      },
      where: {
        id: $id
      }
    ) {
      id
      costs
    }
  }
`;

export const updateProjectDescriptionQ = `
  mutation updateProject (
    $id: ID!
    $value: String
  ) {
    updateProject(
      data:{
        description: $value
      },
      where: {
        id: $id
      }
    ) {
      id
      description
    }
  }
`;
// todo not wokk
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
      data: {
        name: $name
        description: $description
        tags: {
        connect: {
          id: $tagsIds
        }
        subLabel: $subLabel
        costs: $costs
        usersIds: $usersIds
        startDate: $startDate
        dueDate: $dueDate
      }
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

export const getProjectsQ = `
  query {
    projects {
      id
      name
      subLabel
      description
      costs
      startDate
      dueDate
      tags {
        id
        name
        projects {
          id
        }
      }
      projectUsers {
        id
        name
        email
      }
      status
    }
  }
`;
