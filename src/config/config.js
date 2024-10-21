import dotenv from 'dotenv';
dotenv.config();
export default {
    HOST: process.env.HOST || 'No se encontro la variable de entorno HOST',
    PORT: process.env.PORT || 3000,
    API_URL: process.env.API_URL || '/api/v1',
    CONNECTION_STRING: process.env.CONNECTION_STRING || 'mongodb://localhost:27017/?serverSelectionTimeoutMS=5000&connectTimeoutMS=10000',
    DATABASE: process.env.DATABASE || 'db_default',
    DB_PASSWORD: process.env.DB_PASSWORD || 'admin',
    DB_USER: process.env.DB_USER || 'admin',
}