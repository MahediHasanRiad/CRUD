const app = require("./app");
const mongoose = require('mongoose')

// server
const Port = process.env.Port || 2000;

// Connect DataBase
// const url = "mongodb+srv://riad:riad123@cluster0.jviswqb.mongodb.net/CRUD?retryWrites=true&w=majority";
const url = 'mongodb://localhost:27017/Business'

mongoose.connect(url, () => {
  app.listen(Port, () => {
    console.log(`server is on... ${Port}`);
  });
});
