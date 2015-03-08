"use strict";

function Grid(w, h, r) {
  var _this = this;

  this.w = w;
  this.h = h;
  this.r = r;
  this.clone = function (options) {
    var w = options.w || _this.w;
    var h = options.h || _this.h;
    var r = options.r || _this.r;
    return new Grid(w, h, r);
  };
}

function Robot(pos, facing) {
  this.pos = pos;
  this.facing = facing;
};

function Position(x, y) {
  this.x = x;
  this.y = y;
};

/* Commands */

function isValid(grid, pos) {
  return pos.x < grid.w && pos.x >= 0 && (pos.y < grid.h && pos.y >= 0);
}

function place(grid, pos, facing) {
  if (isValid(grid, pos)) {
    return grid.clone({
      r: new Robot(pos, facing)
    });
  } else {
    console.log("--> Invalid position");
    return grid;
  }
}

function move(grid) {}

function turn(grid, dir) {
  var shift = dir == -1 ? 3 : dir == 1 ? 1 : null;
  if (shift === null) {
    return grid;
  } else {
    return grid.clone({
      r: new Robot(grid.r.pos, (shift + grid.r.facing) % 4)
    });
  }
}

function report(grid) {}