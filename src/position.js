class Position {
  constructor(x, y) {
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
  }
}

module.exports = Position;

