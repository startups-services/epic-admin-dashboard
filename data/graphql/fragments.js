export const allProjectFields = `
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
