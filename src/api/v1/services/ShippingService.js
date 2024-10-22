import Shipping from '../models/ShippingServ';  // Cambiado de Order a Shipping
import boom from '@hapi/boom';

export const getShippingList = async () => {
    let shippingList;
    try {
        shippingList = await Shipping.find();  // Cambiado a Shipping
        return shippingList;
    } catch (error) {
        throw boom.internal(error);
    }
};

export const getShippingItem = async (id, keyType) => {
    let shippingItem;
    try {
        if (keyType === 'OK') {
            shippingItem = await Shipping.findOne({
                IdEntregaOK: id,  // Cambiado a IdEntregaOK
            });
        } else if (keyType === 'BK') {
            shippingItem = await Shipping.findOne({
                IdEntregaBK: id,  // Cambiado a IdEntregaBK
            });
        }
        return shippingItem;
    } catch (error) {
        throw boom.internal(error);
    }
};

export const postShipping = async (paShipping) => {  // Cambiado de postOrders a postShipping
    try {
        const newShipping = new Shipping(paShipping);  // Cambiado a Shipping
        return await newShipping.save();
    } catch (error) {
        throw error;
    }
};

export const putShippingItem = async (id, paShipping) => {  // Cambiado de putOrderItem a putShippingItem
    try {
        return await Shipping.findOneAndUpdate(
            { IdEntregaOK: id },  // Cambiado a IdEntregaOK
            paShipping,
            { new: true }
        );
    } catch (error) {
        throw boom.badImplementation(error);
    }
};

export const deleteShippingItem = async (id, keyType) => {  // Cambiado de deleteOrderItem a deleteShippingItem
    try {
        let deleteShippingItem;
        if (keyType === 'OK') {
            deleteShippingItem = await Shipping.findOneAndDelete({
                IdEntregaOK: id,  // Cambiado a IdEntregaOK
            });
        } else if (keyType === 'BK') {
            deleteShippingItem = await Shipping.findOneAndDelete({
                IdEntregaBK: id,  // Cambiado a IdEntregaBK
            });
        }
        return deleteShippingItem;
    } catch (error) {
        throw boom.badImplementation(error);
    }
};
