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
