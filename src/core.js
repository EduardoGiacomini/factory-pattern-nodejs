const createDatabaseConnection = require('./database');
const createWebserver = require('./webserver');

function createCore(configurations = {}) {
  const database = configurations.database || createDatabaseConnection();
  const webserver = configurations.webserver || createWebserver();

  function start() {
    console.log('[core] Starting...');
    database.start();
    webserver.start();
    console.log('[core] Starting done! System running!');

    throw new Error('intentional error');
  }

  function stop() {
    console.log('[core] Stopping...');
    webserver.stop();
    database.stop();
    console.log('[core] Stopping done!');
  }

  return {
    start,
    stop
  }
}

module.exports = createCore;
