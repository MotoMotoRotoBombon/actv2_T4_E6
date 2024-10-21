import * as OrdersServices from '../services/OrdersServices';
import boom from '@hapi/boom';

//API GET
export const getOrderList = async (req, res, next) => {
    try{
          const orderList = await OrdersServices.getOrderList();
          if (!orderList) {
            throw boom.notFound('No se encontraron ordenes registradas.');
          } else if (orderList) {
            res.status(200).json(orderList);
          } 

      } catch(error) {
        next(error);
      }
};

export const getOrderItem = async (req, res, next) => {
    try {
      const { id } = req.params;
      const keyType = req.query.keyType || 'OK';
      const orderItem = await OrdersServices.getOrderItem(id, keyType);
    if (!orderItem) {
      throw boom.notFound('No se encontraron ordenes registradas.');
    } else if (orderItem) {
      res.status(200).json(orderItem);
    }
  }catch(error){
    next(error);
  }
};

export const postOrderItem = async (req, res, next) => {
    try {
      const paOrder = req.body;
      const newOrderItem = await OrdersServices.postOrders(paOrder);
      if (!newOrderItem) {
        throw boom.notFound('No se encontraron Ordenes registradas.');
      } else if (newOrderItem) {
        res.status(200).json(newOrderItem);
      }
    }catch(error){
      next(error);
    }
}

export const putOrderItem = async (req, res, next) => {
  try {
    const {id} = req.params;
      console.log('Controller id ->',id);
    const paOrder = req.body;
      console.log('Controller body ->',paOrder);
    const updatedOrderItem = await OrdersServices.putOrderItem(id, paOrder);

    if(!updatedOrderItem) {
      throw boom.badRequest('No se encontraron Ordenes registradas.');
    } else if (updatedOrderItem) {
      res.status(200).json(updatedOrderItem);
    }
  } catch (error) {
    next(error);
  }
}

export const deleteOrderItem = async (req, res, next) => {
  try {
    const {id} = req.params;
    const keyType = req.query.keyType || 'OK';
    const deletedOrderItem = await OrdersServices.deleteOrderItem(id, keyType);
    
    if (!deletedOrderItem) {
      throw boom.badRequest('No se encontraron Ordenes registradas.');
    } else if (deletedOrderItem) {
      res.status(200).json(deletedOrderItem);
    }

  }catch (error) {
    next(error);
  }
};