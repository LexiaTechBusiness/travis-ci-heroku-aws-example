const request = require('supertest');
const mongoose = require('mongoose');
const config = require('../../src/config/config');
const app = require('../../src/app');

describe('GET /', () => {
  beforeAll(() => {
    return mongoose.connect(config.mongoose.url, config.mongoose.options).then(() => {
      console.log('Connected to MongoDasdasdasdB');
    });
  });
  it('responds with 200', async () => {
    await request(app).get('/').expect(200);
  });

  it('responds with 200', async () => {
    await request(app).get('/test').expect(200);
  });

  afterAll(() => {
    return mongoose.connection.close();
  });
});
