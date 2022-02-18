const chunkArray = require('./chunkArray');

test('Test that the chunkArray function exists and defined', () =>
{
    expect(chunkArray).toBeDefined();
});

test('Test array with 10 values with length of 2', () =>
{
    const numbers = [1,2,3,4,5,6,7,8,9,10];
    const len = 2;
    expect(chunkArray(numbers, 2)).toEqual([[1,2],[3,4],[5,6],[7,8],[9,10]]);
});
test('Test array with 3 values with length of 1', () =>
{
    const numbers = [1,2,3];
    const len = 1;
    expect(chunkArray(numbers, len)).toEqual([[1],[2],[3]]);
});
