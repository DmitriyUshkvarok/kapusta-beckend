const app = require('./app')
// 4vefkgQgvBxfK7r kapusta mongo db 
const DB_HOST = 'mongodb+srv://DmitriyUshkvarok:4vefkgQgvBxfK7r@cluster0.rd1avfm.mongodb.net/kapusta_wallet?retryWrites=true&w=majority'

const mongoose = require('mongoose');

// const { DB_HOST } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
    console.log('Database connection successful');
  })
  .catch((e) => {
    console.log(e.message);
    process.exit(1);
  });