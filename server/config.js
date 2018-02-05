const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://swannlv:devsmap@ds123258.mlab.com:23258/devsmap',//'mongodb://localhost:27017/mern-starter',
  port: process.env.PORT || 8000,
};

export default config;
