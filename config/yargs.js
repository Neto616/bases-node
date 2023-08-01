const { option, describe } = require('yargs');

const argv = require( 'yargs' )
                    .option('b', {
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        describe: 'Es la base de la tabla de multiplicar',
                        default: 1
                    })
                    .option('l', {
                        alias: 'listar',
                        type: 'boolean',
                        demandOption: true,
                        default: false,
                        describe: 'Muestra la tabla en consola'
                    })
                    .option('h',{
                        alias: 'hasta',
                        type: 'number',
                        demandOption: true,
                    })
                    .check((argv, options) =>{
                        if( isNaN( argv.b ) ){
                            throw 'la base tiene que ser un numero'
                        }return true;
                    })
                    .argv;

module.exports = argv;