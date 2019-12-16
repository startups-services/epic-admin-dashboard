const faker = require('faker');
const {
  createTagQ, createUserQ, createProjectQF, deleteAllProjectsQ, deleteAllUsersQ, deleteAllTagsQ,
} = require('./queries');
const { execQuery } = require('./execQuery');

require('dotenv').config();

const statuses = ['completed', 'progress', 'pending', 'canceled'];

const createTag = async () => {
  const tag = await execQuery(createTagQ, { name: faker.random.word() });
  console.log('create tag');
  return tag.createTag;
};

const createUser = async () => {
  const res = await execQuery(createUserQ, { name: faker.name.findName(), email: faker.internet.email() });
  console.log('create user');
  return res.createProjectUser;
};

const createProject = async (tags, users) => {
  console.log('create project');
  const queryString = createProjectQF(
    tags.filter(() => faker.random.boolean()),
    users.filter(() => faker.random.boolean()),
  );

  try {
    const res = await execQuery(queryString, {
      name: faker.commerce.productName(),
      description: faker.lorem.text(),
      costs: `${faker.random.number(10000)}`, // TODO 100 - 10 000
      subLabel: faker.commerce.department(),
      startDate: new Date(+new Date() - Math.random() * 100000000),
      dueDate: new Date(+new Date() + Math.random() * 100000000),
      projectStatus: statuses[+(Math.random() * 3).toFixed(0)],
    });
  } catch (e) {
    console.log(e);
  }
};

(async () => {
  console.log('delete all current data');
  await execQuery(deleteAllProjectsQ);
  await execQuery(deleteAllUsersQ);
  await execQuery(deleteAllTagsQ);

  const tags = [];
  tags.push(await createTag());
  tags.push(await createTag());
  tags.push(await createTag());
  tags.push(await createTag());
  tags.push(await createTag());
  tags.push(await createTag());
  tags.push(await createTag());
  tags.push(await createTag());
  tags.push(await createTag());
  tags.push(await createTag());

  const users = [];
  users.push(await createUser());
  users.push(await createUser());
  users.push(await createUser());
  users.push(await createUser());
  users.push(await createUser());

  const projects = [];
  projects.push(await createProject(tags, users));
  projects.push(await createProject(tags, users));
  projects.push(await createProject(tags, users));
  projects.push(await createProject(tags, users));
  projects.push(await createProject(tags, users));
  projects.push(await createProject(tags, users));
  projects.push(await createProject(tags, users));
  projects.push(await createProject(tags, users));
  projects.push(await createProject(tags, users));
  projects.push(await createProject(tags, users));


  console.log('database reset !');
})();
