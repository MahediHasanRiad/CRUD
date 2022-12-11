const app = require('./app')


// server
const Port = process.env.Port || 2000;

app.listen(Port, ()=>{
    console.log(`server is on... ${Port}`)
})