function createWebserver() {
  function start() {
    console.log('[webserver] Staring...');
    console.log('[webserver] Waiting for port to be available...');
    console.log('[webserver] Starting done!');
  }

  function stop() {
    console.log('[webserver] Stopping...');
    console.log('[webserver] Gracefully waiting for all clients...');
    console.log('[webserver] Closing all ports...');
    console.log('[webserver] Stopping done!');
  }

  return {
    start,
    stop
  }
}

module.exports = createWebserver;
