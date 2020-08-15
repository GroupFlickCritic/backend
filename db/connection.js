const mongoose = require('mongoose');

mongoose.Promise = Promise;

const mongoURI = 'mongodb://localhost/flick-critic';

mongoose.connect(mongoose, {useNewUrlParser: true}).then((conn)=>{
    console.log(`connected to mongodb on ${conn.connections[0].name} db`)
}).catch(error =>{
    console.log(error);
});

module.exports = mongoose;