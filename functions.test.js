const functions = require('./functions');

const initDataBase = () => console.log('DB initialize');
const closeDataBase = () => console.log('DB tear down');

const initDataBaseBeforeAll = () => console.log('DB initialize - Before all');
const closeDataBaseAfterAll = () => console.log('DB tear down -  - After all');

beforeEach(() => initDataBase());
afterEach(() => closeDataBase());
beforeAll(() => initDataBaseBeforeAll());
afterAll(() => closeDataBaseAfterAll());
test('Adds 2 + 2 eq to 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 not to 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});
test('should be null', () => {
    expect(functions.isNull()).toBeNull();
});
test('should be null', () => {
    expect(functions.isNull()).toBeNull();
});
test('should be falsy 1', () => {
    expect(functions.checkValue(null)).toBeFalsy();
});
test('should be falsy 2', () => {
    expect(functions.checkValue(0)).toBeFalsy();
});
test('should be falsy 3', () => {
    expect(functions.checkValue(undefined)).toBeFalsy();
});
test('should be falsy 4', () => {
    expect(functions.checkValue(undefined)).not.toBeTruthy();
});
test('user should be AbdElAziz Zaki', () => {
    expect(functions.createUser()).toStrictEqual( {"firstName": "AbdElAziz", "lastName": "Zaki"});
});
// Regex
test('there is no I or i in team', () => {
    expect('Iteami').toMatch(/I/);
});
// Arrays
test('Admin should be in user names', () => {
    userNames = ['Admin', 'Ali', 'Adel'];
    expect(userNames).toContain('Admin');
});
// Promise
test('Test user fetched name should be Leanne Graham', () => {
    // this assertion is used with async data
    // make sure that then of a promise actually get called
    expect.assertions(1);
    // you want to return a promise - if you omit this, the test will complete before the fetch complete
    return functions.fetchUser()
    .then(data => {
        expect(data.name).toEqual('Leanne Graham')
    });
});
// Async - Await
test('Test user fetched name should be Leanne Graham', async() => {
    // this assertion is used with async data
    // make sure that then of a promise actually get called
    expect.assertions(1);
    // you want to return a promise - if you omit this, the test will complete before the fetch complete
    const data = await functions.fetchUser()
    .then(data => {
        expect(data.name).toEqual('Leanne Graham')
    });
});

    
