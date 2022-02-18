const nameCheck = () => console.log('Checking name......');

describe('Checking names', () => { 
    beforeEach(() => nameCheck());

    test('user name is Jeff', () => {
        const user = 'Jeff';
        expect(user).toBe('Jeff');
    });

    test('user name is ahmed', () => {
        const user = 'ahmed';
        expect(user).toBe('ahmed');
    });

    test('user name is Ali', () => {
        const user = 'Ali';
        expect(user).toBe('Ali');
    });
 })
