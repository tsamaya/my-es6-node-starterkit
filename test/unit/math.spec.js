const expect = require('chai').expect;
const math = require('../../');

describe('#math', () =>
  describe('function add', () =>
    it('expect 2+2 to equal 4', () =>
      expect(math.add(2, 2)).to.equal(4)
    )
  )
);
