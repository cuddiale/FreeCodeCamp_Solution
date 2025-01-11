function realSet(set1, set2, operation, values) {
  const RangeType = {
    CLOSED: 0,
    BOTH_OPEN: 1,
    LEFT_OPEN: 2,
    RIGHT_OPEN: 3,
  };

  function Predicate(test) {
    this.test = test;
    this.or = function (other) {
      return new Predicate((t) => this.test(t) || other.test(t));
    };
    this.and = function (other) {
      return new Predicate((t) => this.test(t) && other.test(t));
    };
    this.negate = function () {
      return new Predicate((t) => !this.test(t));
    };
  }

  function RealSet(start, end, rangeType, predF) {
    this.low = start;
    this.high = end;

    if (predF) {
      this.predicate = new Predicate(predF);
    } else {
      this.predicate = new Predicate((d) => {
        switch (rangeType) {
          case RangeType.CLOSED:
            return start <= d && d <= end;
          case RangeType.BOTH_OPEN:
            return start < d && d < end;
          case RangeType.LEFT_OPEN:
            return start < d && d <= end;
          case RangeType.RIGHT_OPEN:
            return start <= d && d < end;
        }
      });
    }

    this.contains = function (d) {
      return this.predicate.test(d);
    };

    this.union = function (other) {
      var low2 = Math.min(this.low, other.low);
      var high2 = Math.max(this.high, other.high);
      return new RealSet(low2, high2, null, (d) =>
        this.predicate.or(other.predicate).test(d)
      );
    };

    this.intersect = function (other) {
      var low2 = Math.min(this.low, other.low);
      var high2 = Math.max(this.high, other.high);
      return new RealSet(low2, high2, null, (d) =>
        this.predicate.and(other.predicate).test(d)
      );
    };

    this.subtract = function (other) {
      return new RealSet(this.low, this.high, null, (d) =>
        this.predicate.and(other.predicate.negate()).test(d)
      );
    };
  }
  set1 = new RealSet(set1.low, set1.high, set1.rangeType);
  set2 = new RealSet(set2.low, set2.high, set2.rangeType);
  var result = [];
  values.forEach(function (value) {
    result.push(set1[operation](set2).contains(value));
  });
  return result;
}
