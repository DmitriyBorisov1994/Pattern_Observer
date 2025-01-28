export class Observable<T> {
  state: T;
  observers: ((state: T) => void)[];
  constructor(model: T) {
    this.state = model;
    this.observers = [];
  }
  setState(state: T) {
    this.state = state;
    this.notify(this.state);
  }
  subscribe(func: (state: T) => void) {
    this.observers.push(func);
  }
  unsubscribe(func: (state?: T) => void) {
    this.observers = this.observers.filter((observer) => observer !== func);
  }
  notify(state: T = this.state) {
    this.observers.forEach((observer) => observer(state));
  }
}
