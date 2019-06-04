'use strict';

import { addN } from './add-n';

describe('addN', () => {
  it('adds n to the increment 8 and returns the result', () => {
    const addEight = addN(8);
    expect(addEight(7)).toBe(15);
    expect(addEight(100)).toBe(108);
    expect(addEight(7.954)).toBe(15.954);
    expect(addEight(1e7)).toBe(10000008);
    expect(addEight(-5)).toBe(3);
  });
});
