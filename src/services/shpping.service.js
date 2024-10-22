import OrderServ from '../api/v1/models/OrderServ';
import {OK, FAIL} from '../middlewares/resp.handler';

export const addManyOrders = async (orders) => {
    try {
        const ordersAdded = await orders.insertMany(orders, { order: true });
        return OK('Ordenes agregadas correctamente', ordersAdded);
    } catch (error) {
        if(error.code === 11000) {
            return FAIL('La orden ya existe. Verifica la información e intenta de nuevo.', error);
        }else{
            return FAIL('No se pudo agregar la orden. Error en el servidor', error);
        }

    }
};

export const pushObjStatus = async (id, objStatus) =>{
    try {
        const orderUpdated = await ecommerce.findOneAndUpdate(
            { IdOrdenBK: id }, 
            { $push: { status: objStatus } },
            { new: true }
        );
        return {succes: tre, orderUpdated};
    } catch (error) {
        return {succes: false, error};
    }
}

