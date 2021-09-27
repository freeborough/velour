import { hrtime } from "process";

export default class DeltaLoop {
  _lastLoop = 0n;
  _current = 0n;
  running = false;

  constructor(callback) {
    this.callback = callback;
  }

  start() {
    this.running = true;
    this._lastLoop = hrtime.bigint();
    this.loop();
  }

  stop() {
    this.running = false;
  }

  loop() {
    if(this.running) {
      setImmediate(() => {
        this._current = hrtime.bigint();
        this.callback(this._current - this._lastLoop);
        this._lastLoop = this._current;
        this.loop();
      });
    }
  }
}