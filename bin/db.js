const mongoose = require('mongoose');
require ('dotenv').config({path: './variables.env'});

const conectarDB = async() => {

    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        },function (error) {
            if(error){
                throw error;
            }else{
                console.log('Conectado a MongoDB');
            }
        })

    } catch (error) {
        console.log(error);
        process.exit(1);    // detenemos la app
    }

}
module.exports = conectarDB