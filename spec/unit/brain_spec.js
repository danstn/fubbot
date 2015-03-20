require('spec_helper');

var Robot    = require('robot');
var Grid     = require('grid');
var Position = require('position');

var Brain = require('brain');

describe('robot', () => {

  var subject, expected;
  var position, robot, grid;

  it('is alive!', () => {
    expect(true).toBe(true);
  });

  describe('#place', () => {
    beforeEach(() => {
      position = new Position(2, 2);
      robot    = new Robot(position, 0);
      grid     = new Grid(5, 5, robot);
      subject = Brain.place(grid, position, 0);
    });

    it('places a robot at a new position facing a new direction', () => {
      expected = new Grid(5, 5, new Robot(new Position(2, 2), 0));
      expectToEqual(subject, expected);
    });
  });

});
