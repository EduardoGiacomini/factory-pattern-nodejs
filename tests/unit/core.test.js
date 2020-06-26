const createCore = require('../../src/core');

// Este teste de unidade foi criado a fim de testar apenas
// a unidade #core, porém, como é possível observar nos logs
// que todo o sistema é carregado. O que não é desejável para um
// teste de unidade visto que queremos testar apenas o módulo
// #core e desejamos que isso seja o mais rápido possível.

describe('Core quando importado', () => {
  test('deve ter o método #start e #stop', () => {
    const core = createCore();
    expect(core).toHaveProperty('start');
    expect(core).toHaveProperty('stop');
  });
});

describe('Core quando inicializado', () => {
  test('não deve retornar erros', () =>   {
    const core = createCore();
    expect(() => {
      core.start();
    }).not.toThrow();
  });
});
