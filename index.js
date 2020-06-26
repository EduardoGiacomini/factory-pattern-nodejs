const createCore = require('./src/core');

const core = createCore();

try {
  core.start();
  core.stop();
} catch (error) {
  console.log('Uncaught exception!');
  console.log(error);
}
