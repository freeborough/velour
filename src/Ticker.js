export default class Ticker {
  _rate;
  _tickTimer;
  _running = false;
  functionToCall;
  

  constructor(args) {
    this.functionToCall = args.functionToCall || null;
    this._rate = args.rate | 10;
  }

  set rate(rate) {
    this._rate = rate;

    if (this._running) {
      this.stop();
      this.start();
    }
  }

  get rate() {
    return this.rate;
  }

  get running() {
    return this._running;
  }

  // TODO: Be more precise about fractional results.
  // TODO: Do we want to handle a rate greater than 1000 here, or in a class that uses this class? setInterval cannot
  //       accept a duration < 1 (ms).
  calculateInterval() {
    return 1000 / this._rate;
  }

  start() {
    if (!this._running) {
      this._running = true;
      this._tickTimer = setInterval(this.functionToCall, this.calculateInterval());
    } else {
      console.error("ERROR: Ticker has already started.");
    }
  }

  stop() {
    if (this._running) {
      clearInterval(this._tickTimer);
      this._running = false;
    } else {
      console.error("ERROR: Ticker has alerady stopped.");
    }
  }
}
