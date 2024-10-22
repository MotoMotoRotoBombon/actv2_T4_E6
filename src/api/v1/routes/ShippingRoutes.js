import { Router } from 'express';
import * as shippingController from '../controllers/shipping.controller';  // Actualizado a shippingController

const router = Router();

router.get('/', shippingController.getShippingList);
router.get('/:id', shippingController.getShippingItem);
router.post('/', shippingController.postShippingItem);
router.put('/:id', shippingController.putShippingItem);
router.delete('/:id', shippingController.deleteShippingItem);

export default router;
