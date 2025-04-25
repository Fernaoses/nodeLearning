const fsPromises = require('fs').promises;
const path = require('path');

const fileOps = async () => {
    try{
        const data = await fsPromises.readFile(path.join(__dirname, 'files','starter.txt'), 'utf8')
        console.log(data)
        await fsPromises.unlink(path.join(__dirname, 'files','starter.txt'))
        await fsPromises.writeFile(path.join(__dirname, 'files','promisesWrite.txt'), data)
        await fsPromises.appendFile(path.join(__dirname, 'files','promisesWrite.txt'), '\n\nAñadir texto')
        await fsPromises.rename(path.join(__dirname, 'files','promisesWrite.txt'), path.join(__dirname, 'files','promisesComplete.txt'))
        const newData = await fsPromises.readFile(path.join(__dirname, 'files','promisesComplete.txt'), 'utf8')
        console.log(newData)
    }catch(err){
        console.log(err);
    }   
}

// Llamada a la función
fileOps()

// Lectura de archivos sin try/catch
/* 
fs.readFile(path.join(__dirname, 'files','starter.txt'), 'utf8', (err, data) => {
    if (err) throw err
    console.log(data)
})
 */

// Acciones con archivos
/* 
// Creación de archivos
fs.writeFile(path.join(__dirname, 'files','reply.txt'), 'Este es el texto a escribir',(err) => {
    if (err) throw err
    console.log('Write complete')

    // Edición de archivos
    fs.appendFile(path.join(__dirname, 'files','reply.txt'), '\n\nTesting test',(err) => {
        if (err) throw err
        console.log('Append complete')
        
        // Renombrar archivos
        fs.rename(path.join(__dirname, 'files','reply.txt'), path.join(__dirname, 'files','newReply.txt'),(err) => {
            if (err) throw err
            console.log('Rename complete')
        })
    })
}) */



process.on('uncaughtException', (err) => {
    console.log('There was an uncaught error', err)
    process.exit(1)
})
