const request = require('supertest');
const mongoose = require('mongoose');
const config = require('../../src/config/config');
const app = require('../../src/app');

describe('GET /', () => {
  beforeAll(() => {
    console.log(config.mongoose.url);
    return mongoose.connect(config.mongoose.url, config.mongoose.options).then((err) => {
      console.log('Connected to MongoDasdasdasdB');
      if (err) console.log(err);
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
