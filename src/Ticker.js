import DeltaLoop from "./DeltaLoop.js";

export default class Ticker {
  _deltaLoop;
  _mainTimer;
  _duration;
  _running = false;
  
  toCall;

  constructor(args) {
    this.toCall = args.toCall || null;
    this._duration = args.duration || 1;
    this.onStop = args.onStop || null;
  }

  get running() {
    return this._running;
  }

  start() {
    if (!this._running) {
      this._deltaLoop = new DeltaLoop(() => {
        this.toCall();
      });

      this._mainTimer = setTimeout(this.stop.bind(this), this._duration * 1000);
      this._running = true;
      this._deltaLoop.start();
    } else {
      console.error("ERROR: Ticker has already started.");
    }
  }

  stop() {
    if (this._running) {
      this._deltaLoop.stop();
      clearTimeout(this._mainTimer);
      this._running = false;
      
      if (this.onStop != null) {
        this.onStop();
      }
    } else {
      console.error("ERROR: Ticker has alerady stopped.");
    }
  }
}
