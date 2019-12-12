import auth0 from '../../auth0config';

export default async function me(req, res) {
  try {
    await auth0.handleProfile(req, res);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    res.status(error.status || 500).end(error.message);
  }
}
