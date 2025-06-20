// first test should return trur is a is true
describe('first test', () => {
  let testVariable: any;

  beforeEach(() => {
    testVariable = {}
  })

  it('should return true if its true', () => {
    testVariable.a = false;

    testVariable.a = true;

    expect(testVariable.a).toBe(true);
  })
});




