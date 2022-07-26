const mongoose = require('mongoose');

const dbConnect = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
      });
    console.log('MongoDB connected');
  } catch (error) {
    console.log(error);
  }
}

module.exports = dbConnect;


