const fs = require( 'fs' );
const colors = require( 'colors' );

const crearArchivo = async ( base , listar = false, hasta ) =>{
    console.clear();
   try{
       let salida = "", consola = '' ;

       for(let i = 1; i <= hasta; i++){
           consola += `${base} x ${i} = ${ base * i }\n`.rainbow
           salida += `${base}x ${i} = ${ base * i }\n`;; 
        }
       if ( listar ){
       console.log("=======================".green);
       console.log(`======Tabla del ${ base }======`.rainbow);
       console.log("=======================".green);
       console.log(consola);
       
        }
        
        fs.writeFileSync( `./salidas/tabla-${base}.tx`, salida);
        
        return `tabla-${base}.txt`.zebra;
    }
    catch (err){
        throw err;
    }

}

module.exports = {
    crearArchivo
};