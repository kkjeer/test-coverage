const functions = require('./index');

describe('add', () => {
    it('adds 1 and 2 to make 3', () => {
        const result = functions.add(1, 2);
        expect(result).toBe(3);
    });
});

describe('subtract', () => {
    it('subtracts 3 and 2 to make 1', () => {
        const result = functions.subtract(3, 2);
        expect(result).toBe(1);
    });
});

describe('numberDescription', () => {
    it('returns Positive for 1', () => {
        const result = functions.numberDescription(1);
        expect(result).toBe('Positive');
    });
    it('returns Negative for -1', () => {
        const result = functions.numberDescription(-1);
        expect(result).toBe('Negative');
    });
    it('returns Zero for 0', () => {
        const result = functions.numberDescription(0);
        expect(result).toBe('Zero');
    });
});

describe('filterArray', () => {
    it('gets positive numbers from a length 6 array', () => {
        const arr = [-1, 1, -2, 2, -3, 3];
        const result = functions.filterArray(arr);
        expect(result).toEqual([1, 2, 3]);
    });
    it('gets negative numbers from a length 7 array', () => {
        const arr = [-1, 1, -2, 2, -3, 3, -4];
        const result = functions.filterArray(arr);
        expect(result).toEqual([-1, -2, -3, -4]);
    });
    it('gets even numbers from a length 8 array', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8];
        const result = functions.filterArray(arr);
        expect(result).toEqual([2, 4, 6, 8]);
    });
});
