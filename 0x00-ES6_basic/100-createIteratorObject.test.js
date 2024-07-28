import createIteratorObject from "./100-createIteratorObject.js";

describe('createIteratorObject', () => {
  it('should return an iterator for a given report object', () => {
    const report = {
      allEmployees: {
        engineering: [
          { name: 'Bob', department: 'engineering' },
          { name: 'Jane', department: 'engineering' },
        ],
        marketing: [
          { name: 'Sylvie', department: 'marketing' },
        ],
      },
    };

    const iterator = createIteratorObject(report)[Symbol.iterator]();

    expect(iterator.next().value).toEqual({ name: 'Bob', department: 'engineering' });
    expect(iterator.next().value).toEqual({ name: 'Jane', department: 'engineering' });
    expect(iterator.next().value).toEqual({ name: 'Sylvie', department: 'marketing' });
    expect(iterator.next().done).toBe(true); // Ensure iteration is complete
  });
});
