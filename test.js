require('./index.js');

test('goldenRatio', () => {
    const x = 5
    expect(x.goldenRatio).toBe(1.61803398875);
});

test('round', () => {
    const x = 5.9
    expect(x.round()).toBe(6);
});

test('floor', () => {
    const x = 5.9
    expect(x.floor()).toBe(5);
});

test('ceil', () => {
    const x = 1.03
    expect(x.ceil()).toBe(2);
});