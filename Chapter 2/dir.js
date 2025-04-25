const fs = require('fs')
const path = require('path')

// Check if directory exists

if (!fs.existsSync(path.join(__dirname, 'newDir'))) {
    fs.mkdir(path.join(__dirname, 'newDir'), (err) => {
        if (err) throw err
        console.log('Directory created')
    })
}

if (fs.existsSync(path.join(__dirname, 'newDir'))) {
    fs.rmdir(path.join(__dirname, 'newDir'), (err) => {
        if (err) throw err
        console.log('Directory removed')
    })
}


// Create a new directory
/* 
fs.mkdir('newDir', (err) => {
    if (err) throw err
    console.log('Directory created')
}) */