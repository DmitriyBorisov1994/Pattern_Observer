export interface IController<T, D extends string> {
  dispatch: (state: T, action: D) => T;
}
