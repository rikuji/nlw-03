import { Router } from 'express';

const routes = Router();

routes.post('/orphanages', async (req, res) => {
  return res.status(201).json(orphanage);
});

export default routes;
