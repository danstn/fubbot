function Grid(w, h, r) {
  this.w = w;
  this.h = h;
  this.r = r;
  this.clone = (options) => {
    var w = options.w || this.w;
    var h = options.h || this.h;
    var r = options.r || this.r;
    return new Grid(w, h, r);
  }
}

function Robot(pos, facing) {
  this.pos = pos;
  this.facing = facing;
};

function Position(x, y) {
  this.x = x;
  this.y = y;
  this.next = (facing) => {
    switch (facing) {
      case 0: return new Position(this.x, this.y + 1);
      case 1: return new Position(this.x + 1, this.y);
      case 2: return new Position(this.x, this.y - 1);
      case 3: return new Position(this.x - 1, this.y);
      default: return this;
    }
  }
};

/* Commands */

function isValid(grid, pos) {
  return (
    (pos.x < grid.w && pos.x >= 0) && 
    (pos.y < grid.h && pos.y >= 0)
  );
}

function place(grid, pos, facing) {
  if (isValid(grid, pos)) {
    return grid.clone({
      r: new Robot(pos, facing)
    });
  } else {
    console.log('--> Invalid position');
    return grid;
  }
}

function move(grid) {
  var newPos = grid.r.pos.next(grid.r.facing);
  if (isValid(grid, newPos)) {
    return grid.clone({
      r: new Robot(newPos, grid.r.facing)
    });
  } else {
    return grid;
  }
}

function turn(grid, dir) {
  var shift = (dir == -1) ? 3 : (dir == 1) ? 1 : null;
  if (shift === null) {
    return grid;
  } else {
    return grid.clone({
      r: new Robot(grid.r.pos, (shift + grid.r.facing) % 4)
    });
  }
}

function report(grid) {

}

