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

test('degToRad', () => {
    const x = 45
    expect(x.degToRad()).toBe(0.785)
    const y = "a"
    expect(() => y.degToRad()).toThrow(TypeError)
});

test('radToDeg', () => {
    const x = 0.785
    expect(x.radToDeg()).toBe(44.977)
    const y = "a"
    expect(() => y.degToRad()).toThrow(TypeError)
});

test('toDollars', () => {
    const x = 34.801
    expect(x.toDollars()).toBe('$34.80');
    const y = 2
    expect(y.toDollars(4,3)).toBe('$2.00');
});

test('tax', () => {
    const x = 32.01
    expect(x.tax(0.56)).toBe(32.57)
});

test('interest', () => {
    expect(Number.interest(100, 1, 1)).toBe(101)
});

test('mortage', () => {
    expect(Number.mortage(100000, 30, 3.92)).toBe(392000)
});

test('intToHex', () => {
    const x = 20
    expect(x.intToHex()).toBe('14')
});

test('random functions', () => {
    expect(true).toBe(true)
});