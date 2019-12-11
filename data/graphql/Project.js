import { allProjectFields } from './fragments';

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

export const createProjectQFunc = (tagsIds, usersIds) => (`
   mutation (
    $name: String!
    $description: String!
    $subLabel: String
    $costs: String
    $startDate: String
    $dueDate: String
  ) {
    createProject (
      data: {
        name: $name
        description: $description
        ${tagsIds && tagsIds.length && `
          tags: {
            connect: {
              ${tagsIds.map((id) => (`id: "${id}"`))}
            }
          }
        `}
        ${usersIds && usersIds.length && `
          projectUsers: {
            connect: {
              ${usersIds.map((id) => (`id: "${id}"`))}
            }
          }
        `}
        subLabel: $subLabel
        costs: $costs
        startDate: $startDate
        dueDate: $dueDate
      }
    ) {
      ${allProjectFields}
    }
  }
`
);

export const getProjectsQ = `
  query {
    projects {
      ${allProjectFields}
    }
  }
`;
