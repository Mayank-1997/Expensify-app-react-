const generateGreeting = (name) => `Hello ${name}`;

test('should print hello mayank', () =>
{

const value=generateGreeting('vaani');
expect(value).toBe('Hello vaani');

}
);