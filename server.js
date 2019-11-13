require('./umd/anmatlib');

(function test() {
  let x = 5
  console.log(`${x.goldenRatio} should be 1.61803398875`);
  x = 5.9
  console.log(`${x.round()} should be 6`);
  console.log(`${x.floor()} should be 5`);
} ());
