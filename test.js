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

test('pad', () => {
    const x = 34.801
    expect(x.pad(4,4)).toBe('0034.8010');
    const y = 34.801
    expect(y.pad(4,3)).toBe('0034.801');
});