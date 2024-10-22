import * as ShippingServices from '../services/ShippingService';  
import boom from '@hapi/boom';

//API GET
export const getShippingList = async (req, res, next) => {
    try {
        const shippingList = await ShippingServices.getShippingList();
        if (!shippingList) {
            throw boom.notFound('No se encontraron envíos registrados.');
        } else if (shippingList) {
            res.status(200).json(shippingList);
        }
    } catch (error) {
        next(error);
    }
};

export const getShippingItem = async (req, res, next) => {
    try {
        const { id } = req.params;
        const keyType = req.query.keyType || 'OK';
        const shippingItem = await ShippingServices.getShippingItem(id, keyType);
        if (!shippingItem) {
            throw boom.notFound('No se encontraron envíos registrados.');
        } else if (shippingItem) {
            res.status(200).json(shippingItem);
        }
    } catch (error) {
        next(error);
    }
};

export const postShippingItem = async (req, res, next) => {
    try {
        const paShipping = req.body;
        const newShippingItem = await ShippingServices.postShipping(paShipping);
        if (!newShippingItem) {
            throw boom.notFound('No se encontraron envíos registrados.');
        } else if (newShippingItem) {
            res.status(200).json(newShippingItem);
        }
    } catch (error) {
        next(error);
    }
};

export const putShippingItem = async (req, res, next) => {
    try {
        const { id } = req.params;
        const paShipping = req.body;
        const updatedShippingItem = await ShippingServices.putShippingItem(id, paShipping);

        if (!updatedShippingItem) {
            throw boom.badRequest('No se encontraron envíos registrados.');
        } else if (updatedShippingItem) {
            res.status(200).json(updatedShippingItem);
        }
    } catch (error) {
        next(error);
    }
};

export const deleteShippingItem = async (req, res, next) => {
    try {
        const { id } = req.params;
        const keyType = req.query.keyType || 'OK';
        const deletedShippingItem = await ShippingServices.deleteShippingItem(id, keyType);

        if (!deletedShippingItem) {
            throw boom.badRequest('No se encontraron envíos registrados.');
        } else if (deletedShippingItem) {
            res.status(200).json(deletedShippingItem);
        }

    } catch (error) {
        next(error);
    }
};
