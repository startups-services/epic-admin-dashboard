import { sharedUserFields } from './fragments';

export const updateUserQueries = {};

updateUserQueries.name = `
  mutation updateUserName (
    $id: ID!
    $value: String!
  ) {
    updateProjectUser(
      where: { id: $id }
      data: { name: $value }
    ) {
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
    updateProjectUser(
      where: { id: $id }
      data: { company: $value }
    ) {
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
    updateProjectUser(
      where: { id: $id }
      data: { dateFormat: $value }
    ) {
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
    updateProjectUser(
      where: { id: $id }
      data: { timeFormat: $value }
    ) {
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
    updateProjectUser(
      where: { id: $id }
      data: { timeZone: $value }
    ) {
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
    updateProjectUser(
      where: { id: $id }
      data: { sendEmails: $value }
    ) {
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
    updateProjectUser(
      where: { id: $id }
      data: { sendNotifications: $value }
    ) {
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
    updateProjectUser(
      where: { id: $id }
      data: { sendPushes: $value }
    ) {
      id
      sendPushes
    }
  }
`;

export const getActiveUser = `
  query {
    user {
      ${sharedUserFields}
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
  projectUsers{
    ${sharedUserFields}
  }
}
`;

export const addUserToProjectQ = `
   mutation (
    $userId: ID!
    $projectId: ID!
  ) {
    updateProject(
      where: { id: $projectId }
      data: { projectUsers: {
        connect: {
          id : $userId
        }
      }}
    ) {
      id
      name
      projectUsers {
        id
      }
    }
  }
`;

export const deleteUserFromProjectQ = `
   mutation (
    $userId: ID!
    $projectId: ID!
  ) {
    updateProject(
      where: { id: $projectId }
      data: { projectUsers: {
        disconnect: {
          id: $userId
        }
      }}
    ) {
      id
      name
    }
  }
`;

export const upsertUserQ = `
  mutation (
    $email: String!
    $name: String
  ) {
    upsertProjectUser(
      where: { email: $email }
      create: { email: $email, name: $name }
      update: { }
    ) {
      ${sharedUserFields}
      dateFormat
      timeFormat
      timeZone
      sendEmails
      sendNotifications
      sendPushes
    }
  }
`;
