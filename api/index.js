//librerias
const app = require('./app');
const mongoose = require('mongoose');

// settings
app.set('port', process.env.PORT || 3800);

//configuracion moongose
mongoose.Promise = global.Promise;

// Se utiliza para conectarse a la base de datos no-sql
// Se cambia el tipo de conexión porque estaba desactualizado
// Cambiar la IP si es necesario...
mongoose.connect('mongodb://192.168.159.149:27017/nsocial_dev',{useNewUrlParser: true, useUnifiedTopology:true})
	    .then(()=>{
	    	console.log("=> La conexión a la base de datos nsocial_dev se ha realizado correctamente.")
	    })
	     .catch(err => console.log(err))


// iniciando el servidor
app.listen(app.get('port'),()=>{
    console.log('=> corriendo en http://localhost:'+app.get('port'));
});
