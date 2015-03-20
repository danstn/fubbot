GLOBAL.expectToEqual = (a, b) => {
  expect(JSON.stringify(a)).toEqual(JSON.stringify(b));
}
