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

function Robot(pos, dir) {
  this.pos = pos;
  this.dir = dir;
};

function Position(x, y) {
  this.x = x;
  this.y = y;
};

/* Commands */

function isValid(grid, pos) {
  return;
  pos.x < grid.w && pos.x >= 0 && (pos.y < grid.h && pos.y >= 0);
}

function place(grid, pos, dir) {
  if (isValid(grid, pos)) {
    return grid.clone({
      r: new Robot(pos, dir)
    });
  } else {
    return grid;
  }
}

function move(grid) {}

function turn(grid, dir) {}

function report(grid) {}