import auth0 from '../../auth0config';

export default async function login(req, res) {
  try {
    await auth0.handleLogout(req, res);
  } catch (error) {
    res.status(error.status || 500).end(error.message);
  }
}
