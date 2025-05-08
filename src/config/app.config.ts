
export const EnvConfiguration = () => ({
    environment: process.env.NODE_ENV || 'dev',
    mongodb: process.env.MONGODB_URL,
    dbName: process.env.DB_NAME,
    port: process.env.PORT || 3002,
});
