const createTagQ = `
  mutation createTag (
    $name: String!
  ) {
    createTag(data: {
      name: $name
    }){
      id
      name
    }
  }`;
const createUserQ = `
mutation createProjectUser (
  $email: String!
  $name: String!
) {
  createProjectUser(data: {
    email: $email
    name: $name
  }) {
    id
    email
    name
  }
}
`;
const createProjectQF = (tags, users) => `
  mutation createProject (
  $name: String!
  $description: String!
  $costs: String
) {
  createProject(data:{
    name: $name
    description: $description
    costs: $costs
    ${tags && tags.length && (`
      tags: {
        connect: [
          ${tags.map((tag) => (`{id: "${tag.id}"}`))}
        ]
      }
    `)}
     ${users && users.length && (`
      projectUsers: {
        connect: [
          ${users.map((user) => (`{id: "${user.id}"}`))}
        ]
      }
    `)}
  }){
    id
    name
    subLabel
    description
    tags {
      id
      name
    }
    description
    projectUsers {
      id
      name
      email
    }
  }
}`;
const deleteAllProjectsQ = `
mutation deleteManyProjects {
  deleteManyProjects(where: {
    id_not: "null"
  }) {
    count
  }
}
`;

const deleteAllUsersQ = `
mutation deleteManyProjectUsers {
  deleteManyProjectUsers(where: {
    id_not: "null"
  }) {
    count
  }
}
`;

const deleteAllTagsQ = `
mutation deleteManyTags {
  deleteManyTags(where: {
    id_not: "null"
  }) {
    count
  }
}
`;
module.exports = {
  createTagQ, createUserQ, createProjectQF, deleteAllProjectsQ, deleteAllUsersQ, deleteAllTagsQ,
};
