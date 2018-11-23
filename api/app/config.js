const config = {
  port: process.env.PORT || 3000,
  databaseUrl: process.env.MONGODB_URI || 'mongodb://test:alamakota1@ds024778.mlab.com:24778/test2',
  JwtSecret: process.env.JWT_SECRET || 'secret'
};

export default config;
