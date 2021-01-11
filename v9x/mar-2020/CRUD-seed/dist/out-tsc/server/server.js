const expressApp = require('./app');
const debug = require('debug')('node-angular');
const http = require('http');
const normalizePort = val => {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        // named pipe
        return val;
    }
    if (port >= 0) {
        // port number
        return port;
    }
    return false;
};
const onError = error => {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const bind = typeof PORT === 'string' ? 'pipe ' + PORT : 'port ' + PORT;
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
};
const onListening = () => {
    const addr = server.address();
    const bind = typeof PORT === 'string' ? 'pipe ' + PORT : 'PORT ' + PORT;
    debug('Listening on ' + bind);
};
const PORT = normalizePort(process.env.PORT || '3000');
expressApp.set('port', PORT);
const server = http.createServer(expressApp);
server.on('error', onError);
server.on('listening', onListening);
server.listen(PORT);
//# sourceMappingURL=server.js.map