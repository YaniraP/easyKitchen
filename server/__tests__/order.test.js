const server = require('../index');
const request = require('supertest');
const db = require('../models')

require('dotenv').config();

const env = process.env.NODE_ENV;

// Main wrapper that checks if we are in the test environment
describe('Order Controller test', () => {
  let _server;

  beforeEach(() => {
    _server = request(server)
  });
  afterEach(async () => {
    await db.sync({ force: true });
  });

  it('should return a 404 code if the page does not exist', async () => {
    const res = await _server.get('/habsjnabakalele');

    expect(res.statusCode).toEqual(404);
  })
});
