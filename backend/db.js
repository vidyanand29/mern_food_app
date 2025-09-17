const mongoose = require('mongoose');

require('dotenv').config();

const URL = process.env.DB_URL;

const db_connection =()=>{
  if(!URL){
    console.log('Error: DB_URL not define in .env');
    return;
  }
mongoose.connect(URL) 
.then(()=>{
  console.log('Database is connected successfully');
}).catch((error) => {
  console.error('Database is not connected:', error);
})
};

module.exports = db_connection;
