import { Router } from 'express';
import * as orderController from '../controllers/order.controller';

const router = Router();

router.get('/', orderController.getOrderList);
router.get('/:id', orderController.getOrderItem);
router.post('/', orderController.postOrderItem);
router.put('/:id', orderController.putOrderItem);
router.delete('/:id', orderController.deleteOrderItem);
export default router;