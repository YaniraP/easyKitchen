let request = require('supertest');
const { Dish, sequelize } = require('../models');
const { mockDishes } = require('./mocks');
request = request('http://localhost:3001');

describe('GET requests for dishes', () => {
  beforeAll(async () => {
    await Dish.destroy({where: {}});
    await Dish.bulkCreate(mockDishes);
  });

  afterAll(() => {
    sequelize.close();
  })

  // GET
  it('should send status code 200 for GET request', async done => {
    const response = await request.get('/dish');
    expect(response.status).toBe(200);
    done();
  });

  it('should reply with correct dish data for the GET request', async done => {
    const response = await request.get('/dish');
    let [mock1, mock2] = response.body;

    expect(mock1.title).toBe('Test Burger');
    expect(mock1.description).toBe('A test classic');
    expect(mock1.price).toBe('4.00');

    expect(mock2.title).toBe('Test Bowl');
    expect(mock2.description).toBe('A healthy alternative to testing in production');
    expect(mock2.price).toBe('9.00');
    done();
  });
})

// POST

// DELETE