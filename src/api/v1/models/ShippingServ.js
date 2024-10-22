import * as mongoose from 'mongoose';

const shippingSchema = new mongoose.Schema({
    IdInstitutoOK: { type: String },
    IdNegocioOK: { type: String },
    IdOrdenOK: { type: String },
    IdEntregaOK: { type: String },  // Agregado
    IdOrdenBK: { type: String },
    
    info_ad: [{
        IdEtiquetaOK: { type: String },
        IdEtiqueta: { type: String },
        Etiqueta: { type: String },
        Valor: { type: String },
        IdTipoSeccionOK: { type: String },
        Secuencia: { type: Number },
        detail_row: {
            Activo: { type: String, enum: ["S", "N"] },
            Borrado: { type: String, enum: ["S", "N"] },
            detail_row_reg: [{
                FechaReg: { type: Date },
                UsuarioReg: { type: String }
            }]
        }
    }],
    
    envios: [{
        IdDomicilioOK: { type: String },
        IdPaqueteriaOK: { type: String },
        IdTipoMetodoEnvio: { type: String },
        CostoEnvio: { type: Number },
        
        info_ad: [{
            IdEtiquetaOK: { type: String },
            IdEtiqueta: { type: String },
            Etiqueta: { type: String },
            Valor: { type: String },
            IdTipoSeccionOK: { type: String },
            Secuencia: { type: Number },
            detail_row: {
                Activo: { type: String, enum: ["S", "N"] },
                Borrado: { type: String, enum: ["S", "N"] },
                detail_row_reg: [{
                    FechaReg: { type: Date },
                    UsuarioReg: { type: String }
                }]
            }
        }],
        
        productos: [{
            IdProdServOK: { type: String },
            IdPresentaOK: { type: String },
            DesProdServ: { type: String },
            DesPresenta: { type: String },
            CantidadPed: { type: Number },
            CantidadEnt: { type: Number }
        }],
        
        estatus: [{
            IdTipoEstatusOK: { type: String },
            Actual: { type: String, enum: ["S", "N"] },
            Observacion: { type: String },
            detail_row: {
                Activo: { type: String, enum: ["S", "N"] },
                Borrado: { type: String, enum: ["S", "N"] },
                detail_row_reg: [{
                    FechaReg: { type: Date },
                    UsuarioReg: { type: String }
                }]
            }
        }],
        
        rastreos: {
            NumeroGuia: { type: String },
            IdRepartidorOK: { type: String },
            NombreRepartidor: { type: String },
            Alias: { type: String },
            seguimiento: [{
                Ubicacion: { type: String },
                DesUbicacion: { type: String },
                Referencias: { type: String },
                Observacion: { type: String },
                FechaReg: { type: Date },
                UsuarioReg: { type: String }
            }]
        }
    }],
    
    detail_row: {
        Activo: { type: String, enum: ["S", "N"] },
        Borrado: { type: String, enum: ["S", "N"] },
        detail_row_reg: [{
            FechaReg: { type: Date },
            UsuarioReg: { type: String }
        }]
    }
});

export default mongoose.model('shippings', shippingSchema, 'shippings');

