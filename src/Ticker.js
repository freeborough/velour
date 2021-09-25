export default class Ticker {
  _rate;
  _tickTimer;
  _mainTimer;
  _running = false;
  _duration;
  toCall;

  constructor(args) {
    this.toCall = args.toCall || null;
    this._rate = args.rate || 10;
    this._duration = args.duration || 1;
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
      this._mainTimer = setTimeout(this.stop.bind(this), this._duration * 1000);
      this._running = true;
      this._tickTimer = setInterval(this.toCall, this.calculateInterval());
    } else {
      console.error("ERROR: Ticker has already started.");
    }
  }

  stop() {
    if (this._running) {
      clearInterval(this._tickTimer);
      clearTimeout(this._mainTimer);
      this._running = false;
    } else {
      console.error("ERROR: Ticker has alerady stopped.");
    }
  }
}
