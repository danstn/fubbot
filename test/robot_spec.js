describe('robot', () => {

  var subject, expected;
  var position, robot, grid;

  function _s(o) {
    return JSON.stringify(o);
  };

  it('is alive!', () => {
    expect(true).toBe(true);
  });

  describe('#place', () => {
    beforeEach(() => {
      position = new Position(2, 2);
      robot    = new Robot(position, 0);
      grid     = new Grid(5, 5, robot);
      subject = place(grid, position, 0);
    });

    it('places a robot at a new position facing a new direction', () => {
      expected = new Grid(5, 5, new Robot(new Position(2, 2), 0));
      expect(_s(subject)).toEqual(_s(expected));
    });
  });

});
