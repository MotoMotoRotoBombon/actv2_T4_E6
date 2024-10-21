import * as mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    IdInstitutoOK: { type: String },
    IdNegocioOK: { type: String },
    IdOrdenOK: { type: String },
    IdOrdenBK: { type: String },
    IdTipoOrdenOK: { type: String },
    IdRolOK: { type: String },
    IdPersonaOK: { type: String },
    IdVendedorOK: { type: String },
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
    detalle_ps: [{
        IdNegocioOK: { type: String },
        IdProdServOK: { type: String },
        IdPresentaOK: { type: String },
        DesPresentaPS: { type: String },
        Cantidad: { type: Number },
        PrecioUniSinIVA: { type: Number },
        PrecioUniConIVA: { type: Number },
        PorcentajeIVA: { type: Number },
        MontoUniIVA: { type: Number },
        SubTotalSinIVA: { type: Number },
        SubTotalConIVA: { type: Number },
        IdClienteOK: { type: String },
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
        paquete: [{
            IdPresentaOK: { type: String },
            DesPresenta: { type: String },
            Cantidad: { type: Number },
            Precio: { type: Number },
            detail_row: {
                Activo: { type: String, enum: ["S", "N"] },
                Borrado: { type: String, enum: ["S", "N"] },
                detail_row_reg: [{
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
    }],
    forma_pago: [{
        IdTipoPagoOk: { type: String },
        MontoPagado: { type: Number },
        MontoRecibido: { type: Number },
        MontoDevuelto: { type: Number },
        info_ad: [{
            Etiqueta: { type: String },
            Valor: { type: String },
            IdSeccionOK: { type: String },
            Seccion: { type: String },
            Secuencia: { type: Number },
            detail_row: {
                Activo: { type: String, enum: ["S", "N"] },
                Borrado: { type: String, enum: ["S", "N"] },
                detail_row_reg: [{
                    FechaReg: { type: Date },
                    UsuarioReg: { type: String }
                }]
            }
        }]
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

export default mongoose.model(
    'orders',
    orderSchema
);
