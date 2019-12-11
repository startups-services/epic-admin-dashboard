export const mainProjectFields = `
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
  projectStatus
`;

export const sharedUserFields = `
  id
  name
  email
  company
  projects {
    id
  }
`;

export const mainTagFields = `
  id
  name
  projects {
    id
  }
`;
