const createCore = require('../../src/core');

// Criando função responsável por "imitar" a factory database
// e webserver.
function createMock() {
  function start() {
    console.log('[mock] ...');
  }

  function stop() {
    console.log('[mock] ...');
  }

  return {
    start,
    stop
  }
}

describe('Core quando importado', () => {
  test('deve ter o método #start e #stop', () => {
    const core = createCore();
    expect(core).toHaveProperty('start');
    expect(core).toHaveProperty('stop');
  });
});

describe('Core quando inicializado', () => {
  test('não deve retornar erros', () =>   {
    // Podemos criar instâncias desse mock, e assim isolar
    // por completo o módulo core do sistema.
    const databaseMock = createMock();
    const webserverMock = createMock();

    const core = createCore({
      database: databaseMock,
      webserver: webserverMock
    });

    expect(() => {
      core.start();
    }).not.toThrow();
  });
});
