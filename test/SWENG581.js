var R = require('../source/index.js');
var eq = require('./shared/eq.js');
var assert = require('assert');

describe('SWENG581 tests', function() {
  describe('SWENG581 drop', function() {
    it('handles empty array', function() {
      return eq(R.drop(1, []), []);
    });

    it('handles functions in the array', function() {
      let expectedResult = [() => true, () => undefined, () => 1];
      return eq(R.drop(1, [() => false, () => true, () => undefined, () => 1]), expectedResult);
    });

    it('drops first item from array of objects', function() {
      let expectedResult = [{ name: 'Brock' }, { name: 'Louis' }];
      return eq(R.drop(1, [{ name:'hi' }, { name: 'Brock' }, { name: 'Louis' }]), expectedResult);
    });

    it('handles nested arrays', function() {
      let expectedResult = [[4, 5, 6]];
      return eq(R.drop(1, [[1, 2, 3], [4, 5, 6]]), expectedResult);
    });

    it('handles mixed data type arrays', function() {
      let expectedResult = [2, 'three', 4, null, {}];
      return eq(R.drop(1, ['one', 2, 'three', 4, null, {}]), expectedResult);
    });

    it('handles empty string', function() {
      return eq(R.drop(1, ''), '');
    });

    it('handles a basic string', function() {
      return eq(R.drop(1, 'string'), 'tring');
    });

    it('handles dropding more items than exist in the data', function() {
      return eq(R.drop(10, 'string'), '');
    });

    it('handles undefined data', function() {
      assert.throws(function() {R.drop(1, undefined);}, TypeError);
    });

    it('handles null data', function() {
      assert.throws(function() {R.drop(1, null);}, TypeError);
    });

    it('handles droping 0', function() {
      return eq(R.drop(0, 'string'), 'string');
    });

    it('handles droping -1', function() {
      return eq(R.drop(-1, 'string'), 'string');
    });

    it('handles undefined data', function() {
      return eq(R.drop(undefined, 'string'), 'string');
    });

    it('handles null data', function() {
      return eq(R.drop(null, 'string'), 'string');
    });
  });

  describe('SWENG581 dropLast', function() {
    it('handles empty array', function() {
      return eq(R.dropLast(1, []), []);
    });

    it('handles functions in the array', function() {
      let expectedResult = [() => false, () => true, () => undefined];
      return eq(R.dropLast(1, [() => false, () => true, () => undefined, () => 1]), expectedResult);
    });

    it('drops first item from array of objects', function() {
      let expectedResult = [{ name:'hi' }, { name: 'Brock' }];
      return eq(R.dropLast(1, [{ name:'hi' }, { name: 'Brock' }, { name: 'Louis' }]), expectedResult);
    });

    it('handles nested arrays', function() {
      let expectedResult = [[1, 2, 3]];
      return eq(R.dropLast(1, [[1, 2, 3], [4, 5, 6]]), expectedResult);
    });

    it('handles mixed data type arrays', function() {
      let expectedResult = ['one', 2, 'three', 4, null];
      return eq(R.dropLast(1, ['one', 2, 'three', 4, null, {}]), expectedResult);
    });

    it('handles empty string', function() {
      return eq(R.dropLast(1, ''), '');
    });

    it('handles a basic string', function() {
      return eq(R.dropLast(1, 'string'), 'strin');
    });

    it('handles dropding more items than exist in the data', function() {
      return eq(R.dropLast(10, 'string'), '');
    });

    it('handles undefined data', function() {
      assert.throws(function() {R.dropLast(1, undefined);}, TypeError);
    });

    it('handles null data', function() {
      assert.throws(function() {R.dropLast(1, null);}, TypeError);
    });

    it('handles droping 0', function() {
      return eq(R.dropLast(0, 'string'), 'string');
    });

    it('handles droping -1', function() {
      return eq(R.dropLast(-1, 'string'), 'string');
    });

    it('handles undefined data', function() {
      return eq(R.dropLast(undefined, 'string'), '');
    });

    it('handles null data', function() {
      return eq(R.dropLast(null, 'string'), 'string');
    });
  });
});
