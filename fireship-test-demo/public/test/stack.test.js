class Stack {
    constructor() {
        this.top = -1;
        this.items = {};
    }

    get peek() {
        return this.items[this.top];
    }

    push(item) {
        this.top++;
        this.items[this.top] = item;
    }

    pop() {
        if (this.top === -1) {
            return undefined; // Stack is empty
        }
        const poppedItem = this.items[this.top];
        delete this.items[this.top];
        this.top--;
        return poppedItem;
    }
}

describe('My Stack', () => {
    let stack;
    stack = new Stack();


    // beforeEach(() => {
    //     stack = new Stack();
    // });

    it('is created empty', () => {
        const stack = new Stack();
        expect(stack.top).toBe(-1);
        expect(stack.items).toEqual({});
    });

    it('can push to the top', () => {
        stack.push('📖');
        expect(stack.top).toBe(0);
        expect(stack.peek).toBe('📖');

        stack.push('🌽');
        expect(stack.top).toBe(1);
        expect(stack.peek).toBe('🌽');
    });

    it('can pop off', () => {
        stack.pop();
        expect(stack.top).toBe(0);
        expect(stack.peek).toBe('📖');
    });
});
