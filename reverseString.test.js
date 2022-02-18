const reverseString = require('./reverseString');

test('Test that the reverseString function exists and defined', () =>
{
    expect(reverseString).toBeDefined();
});

test('Test hello revers is olleh', () =>
{
    expect(reverseString('hello')).toBe('olleh');
});
test('Test Hello revers is olleh', () =>
{
    expect(reverseString('Hello')).toBe('olleh');
    console.log('Reverse String unit test - test 3')
});