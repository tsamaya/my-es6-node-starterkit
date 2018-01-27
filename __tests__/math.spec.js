import * as math from '../src/math';

describe('#math', () => {
  describe('function sum', () => {
    it('expect 2+2 to equal 4', () => {
      expect(math.sum(2, 2)).toEqual(4);
    });
    it('expect -2+2 to equal 4', () => {
      expect(math.sum(-2, 2)).toEqual(0);
    });
  });

  describe('function diff', () => {
    it('expect 2-2 to equal 0', () => {
      expect(math.diff(2, 2)).toEqual(0);
    });
    it('expect -2-2 to equal -4', () => {
      expect(math.diff(-2, 2)).toEqual(-4);
    });
  });
});
