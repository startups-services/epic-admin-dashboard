import auth0 from '../../auth0config';

export default async function callback(req, res) {
  try {
    await auth0.handleCallback(req, res, { redirectTo: 'https://epic-admin-dashboard.startups-services.now.sh' });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    res.status(error.status || 400).end(error.message);
  }
}
