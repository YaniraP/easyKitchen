import { readFileSync } from 'fs';
import path from 'path';
import { act } from '@testing-library/react';

const mockOrders = JSON.parse(
  readFileSync(path.join(__dirname, 'res.json').toString())
)

export const _mockOrders = mockOrders

export const _mockOrder = mockOrders[0];


export const _mockAdd = jest.fn();

const mock = {
  orders: jest.fn(() => {
    return {
      then: callback => act(() => callback(mockOrders))
    }
  })
}

export default mock;