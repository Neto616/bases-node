const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');


crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArcivo => console.log(nombreArcivo, 'CREADO ') )
    .catch( err => console.log(err) );
