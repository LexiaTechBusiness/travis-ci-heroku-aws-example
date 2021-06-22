const request = require('supertest');
const app = require('../../src/app');

describe('GET /', () => {

  it('responds with 200', async () => {
    await request(app).get('/').expect(200);
  });

  it('responds with 200', async () => {
    await request(app).get('/').expect(200);
  });
});