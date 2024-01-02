const { sum, deleteUserById } = require('../utils/helper');

describe('Number Operations', () => {
    test('1 plus 1 should be equal to 2', () => {
        const a = 1;
        const b = 1;
        expect(a + b).toBe(2);
    });

    test('5 plus 6 should not be equal to 10', () => {
        const a = 5;
        const b = 6;
        expect(a + b).not.toBe(10);
    });
});

describe('Testing other matcher methods', () => {
    test('Testing that a variable is undefined', () => {
        let number = undefined;

        expect(number).not.toBeDefined();
        expect(number).toBeUndefined();
        expect(number).not.toBeNull();
        expect(number).toBeFalsy();
        expect(number).not.toBeTruthy();
    });

    test('Number Comparison', () => {
        const a = 1;
        const b = 2;
        expect(a + b).toBeGreaterThan(2);
        expect(a + b).toBeGreaterThanOrEqual(3);
        expect(a + b).toBeLessThanOrEqual(5);
        expect(a + b).toBeLessThan(10);
    });

    test('there should be no I in team', () => {
        let string = 'team';

        expect(string).not.toMatch(/I/i);
    });

    test('there is "stop" in Christopher', () => {
        let string = 'Christopher';

        expect(string).toMatch(/stop/);
    });

    const shoppingList = ['Milk', 'Trash Bags', 'Paper Towels', 'Iphones'];
    test("the shopping list doesn't have PS4", () => {
        expect(shoppingList).not.toContain('PS4');
        expect(shoppingList).toContain('Milk');
    });
});

// testing primitive and reference type equality
describe('Testing reference equality', () => {
    const user = {
        name: 'Simform',
    };
    user['age'] = 45;
    id: 1;

    test('Should return a user object with age as 45', () => {
        expect(user).toEqual({
            name: 'Simform',
            age: 45,
        });
    });

    test('Should return a user object with name and age key', () => {
        expect(user).toEqual(
            expect.objectContaining({
                name: expect.any(String),
                age: expect.any(Number),
            })
        );
    });

    // test array equality

    test('Array Equality', () => {
        const users = ['A', 'B', 'C'];

        users.push('D');

        expect(users).toEqual(['A', 'B', 'C', 'D']);
        expect(users).toEqual(expect.arrayContaining(['D']));

        const userObjectInArray = [
            {
                user: 'A',
                age: 12,
            },
            {
                user: 'B',
                age: 14,
            },
            {
                user: 'C',
                age: 12,
            },
        ];

        userObjectInArray.push({
            user: 'D',
            age: 57,
        });

        expect(userObjectInArray).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    user: expect.any(String),
                    age: expect.any(Number),
                }),
            ])
        );
    });
});

describe('Testing imported functions', () => {
    test('Sum function should add 2 numbers', () => {
        expect(sum(5, 3)).toBe(8);
    });

    const users = [
        {
            user: 'A',
            age: 12,
            id: 1,
        },
        {
            user: 'B',
            age: 14,
            id: 2,
        },
        {
            user: 'C',
            age: 12,
            id: 3,
        },
    ];
    test('Delete by id function should delete', () => {
        expect(deleteUserById(users, 2)).toEqual(
            expect.not.arrayContaining([
                {
                    user: 'B',
                    age: 14,
                    id: 2,
                },
            ])
        );

        expect(deleteUserById(users, 2)).toEqual([
            {
                user: 'A',
                age: 12,
                id: 1,
            },
            {
                user: 'C',
                age: 12,
                id: 3,
            },
        ]);
    });
});
