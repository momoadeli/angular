/* THIS FILE INDEX.TS IS THE 'MAIN' ('BARREL') */
import Debug from 'debug';
const debug = Debug('node-angular');
import * as http from 'http';
import { app as expressApp } from './app';

// 1st universal middleware w/'use' regardless of API
expressApp.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
  next(); // continue to next middleware
});

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

const PORT = normalizePort(process.env.PORT || '3000'); // use either host default port or 3000
const bind = typeof PORT === 'string' ? 'pipe ' + PORT : 'PORT ' + PORT;

const onError = error => {
  if (error.syscall !== 'listen') {
    throw error;
  }
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
  debug('Listening on ' + bind);
};


expressApp.set('port', PORT);

const server = http.createServer(expressApp);
server.on('error', onError);
server.on('listening', onListening);
server.listen(PORT);
