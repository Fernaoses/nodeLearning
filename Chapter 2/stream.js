const fs = require('fs')
const path = require('path')

const rs = fs.createReadStream(path.join(__dirname, 'files','lorem.txt'), {encoding: 'utf8'})
const ws = fs.createWriteStream(path.join(__dirname, 'files','newLorem.txt'))

// Lisener structure
/* 
rs.on('data', (dataChunk) => {
    ws.write(dataChunk);
})
 */

// Pipe structure, more efficient than listener structure
rs.pipe(ws) 