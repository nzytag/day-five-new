'use strict';

const nd = require('../lib/solution.js');
let testNd = {
  value: 25,
  next: {
    value: 1,
    next: {
        value: 15,
        next: {
          value: 33,
          next: {
            value: 4,
            next: null
          }
        }
      }
    } 
  }
  it ('should return not null', () => {
    expect(nd.center(testNd)).not.toBeNull()
  })

it('should return middle value', () => {
  let val = nd.center(testNd)
  expect(val.value).toBe(15)
})
it('', () => {
  expect().toBe(null);
});