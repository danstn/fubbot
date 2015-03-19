class Grid {
  constructor(w,h,r) {
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
}

module.exports = Grid;
