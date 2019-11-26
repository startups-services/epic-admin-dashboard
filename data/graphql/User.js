export const updateUserQueries = {};

updateUserQueries.name = `
  mutation updateUserName (
    $id: ID!
    $value: String!
  ) {
    updateUser(id: $id, name: $value) {
      id
      name
    }
  }
`;

updateUserQueries.company = `
  mutation (
    $id: ID!
    $value: String!
  ) {
    updateUser(id: $id, company: $value) {
      id
      company
    }
  }
`;

updateUserQueries.dateFormat = `
  mutation (
    $id: ID!
    $value: String!
  ) {
    updateUser(id: $id, dateFormat: $value) {
      id
      dateFormat
    }
  }
`;

updateUserQueries.timeFormat = `
  mutation (
    $id: ID!
    $value: String
  ) {
    updateUser(id: $id, timeFormat: $value) {
      id
      timeFormat
    }
  }
`;

updateUserQueries.timeZone = `
  mutation (
    $id: ID!
    $value: String
  ) {
    updateUser(id: $id, timeZone: $value) {
      id
      timeZone
    }
  }
`;

updateUserQueries.sendEmails = `
  mutation (
    $id: ID!
    $value: Boolean
  ) {
    updateUser(id: $id, sendEmails: $value) {
      id
      sendEmails
    }
  }
`;

updateUserQueries.sendNotifications = `
  mutation (
    $id: ID!
    $value: Boolean
  ) {
    updateUser(id: $id, sendNotifications: $value) {
      id
      sendNotifications
    }
  }
`;

updateUserQueries.sendPushes = `
  mutation (
    $id: ID!
    $value: Boolean
  ) {
    updateUser(id: $id, sendPushes: $value) {
      id
      sendPushes
    }
  }
`;

export const getActiveUser = `
  query {
    user {
      id
      password
      name
      email
      ava
      company
      dateFormat
      timeFormat
      timeZone
      sendEmails
      sendNotifications
      sendPushes
    }
  }
`;

export const getAllUsersQ = `
  query{
  allUsers{
    id
    name
    email
    ava
    company
    
    projects {
      id
    }
  }
}
`;
