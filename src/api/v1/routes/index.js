import { Router } from 'express';
import config from '../../../config/config';
// Importar rutas
import shippingRoutes from './ShippingRoutes';  

const routerAPI = (app) => {
  const router = Router();
  const api = config.API_URL;
  app.use(api, router);

  // Rutas
  router.use('/shippings', shippingRoutes);  // Rutas para Shipping
  // Retornar Router
  return router;
};

module.exports = routerAPI;
