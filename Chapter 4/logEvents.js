// npm Imports
const { format } = require('date-fns');
const { v4: uuidv4 } = require('uuid');

const fs = require('fs');
const fsPromises = fs.promises;
const path = require('path');

const logEvent = async (event) => {
    const dateTime = `${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}`;
    const logItem = `${dateTime}\t${uuidv4}\t${message}\n`;
    console.log(logItem);
    try {
        await fsPromises.appendFile(path.join(__dirname, 'logs', 'eventLog.txt'), logItem);
    } catch (err) {
        console.log(err);
    }
}

module.exports = logEvent;