var Robot = require('robot');
module.exports = {

  /* Commands */

  isValid: function(grid, pos) {
    return (
      (pos.x < grid.w && pos.x >= 0) && 
      (pos.y < grid.h && pos.y >= 0)
    );
  },

  place: function(grid, pos, facing) {
    if (this.isValid(grid, pos)) {
      return grid.clone({
        r: new Robot(pos, facing)
      });
    } else {
      console.log('--> Invalid position');
      return grid;
    }
  },

  move: function(grid) {
    var newPos = grid.r.pos.next(grid.r.facing);
    if (this.isValid(grid, newPos)) {
      return grid.clone({
        r: new Robot(newPos, grid.r.facing)
      });
    } else {
      return grid;
    }
  },

  turn: function(grid, dir) {
    var shift = (dir == -1) ? 3 : (dir == 1) ? 1 : null;
    if (shift === null) {
      return grid;
    } else {
      return grid.clone({
        r: new Robot(grid.r.pos, (shift + grid.r.facing) % 4)
      });
    }
  },

  report: function(grid) {

  }

}
