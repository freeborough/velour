export default class Ticker {
  _rate;
  _timer;
  functionToCall;
  started = false;

  constructor(args) {
    this.functionToCall = args.functionToCall || null;
    this._rate = args.rate | 10;
  }

  set rate(rate) {
    this._rate = rate;

    if (this.started) {
      this.stop();
      this.start();
    }
  }

  get rate() {
    return this.rate;
  }

  // TODO: Be more precise about fractional results.
  // TODO: Do we want to handle a rate greater than 1000 here, or in a class that uses this class? setInterval cannot
  //       accept a duration < 1 (ms).
  calculateInterval() {
    return 1000 / this._rate;
  }

  start() {
    if (!this.started) {
      this.started = true;
      this._timer = setInterval(this.functionToCall, this.calculateInterval());
    } else {
      console.error("ERROR: Ticker has already started.");
    }
  }

  stop() {
    if (this.started) {
      clearInterval(this._timer);
      this.started = false;
    } else {
      console.error("ERROR: Ticker has alerady stopped.");
    }
  }
}
