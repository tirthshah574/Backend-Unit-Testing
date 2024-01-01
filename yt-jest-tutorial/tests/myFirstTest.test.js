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
