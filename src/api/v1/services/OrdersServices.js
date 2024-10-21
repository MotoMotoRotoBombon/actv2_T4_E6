import Order from '../models/OrderServ';
import boom from '@hapi/boom';

export const getOrderList = async () => {
    let orderList;
    try {
          orderList = await Order.find();
          return(orderList);
    } catch (error) {
      throw boom.internal(error);
    }
  };

  export const getOrderItem = async (id, keyType) => {
    let orderItem;
   
    try {
      if (keyType === 'OK') {
        orderItem = await Order.findOne({
        IdOrdenOK: id,
        });
      } else if (keyType === 'BK') {
          orderItem = await Order.findOne({
          IdOrdenBK: id,
        });
      }
      return(orderItem);
    } catch (error) {
      throw boom.internal(error);
    }
  };

export const postOrders = async (paOrder) => {
  try {
      const newOrder = new Order(paOrder);
      return await newOrder.save();
  } catch (error){
      throw error;
  }
}

export const putOrderItem = async (id, paOrder) => {
  try {
    return await Order.findOneAndUpdate(
      {IdOrdenOK :id},
      paOrder,
      {new: true}
    );
  } catch (error) {
    throw boom.badImplementation(error);
  }
}

export const deleteOrderItem = async (id, keyType) => {
  try {
    let deleteOrderItem;

    if (keyType === 'OK') {
      deleteOrderItem = await Order.findOneAndDelete({
        IdOrdenOK: id,
      });
    } else if (keyType === 'BK') {
        deleteOrderItem = await Order.findOneAndDelete({
        IdOrdenBK: id,
      });
    }
    
    return deleteOrderItem;
  } catch (error) { 
    throw boom.badImplementation(error);
  }

}
