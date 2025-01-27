import { IController } from "../../../utils/IController";
import { ICounterButtonModel } from "../model";

class CounterButtonController
  implements IController<ICounterButtonModel, "increment" | "decrement">
{
  private static _instance: CounterButtonController;

  constructor() {
    if (CounterButtonController._instance) {
      throw new Error("You can only create one instance!");
    }
    CounterButtonController._instance = this;
  }

  dispatch(state: ICounterButtonModel, action: "increment" | "decrement") {
    if (action === "decrement") return this.decrement(state);
    return this.increment(state);
  }

  getInstance() {
    return this;
  }

  increment(state: ICounterButtonModel) {
    return { counter: ++state.counter };
  }

  decrement(state: ICounterButtonModel) {
    return { counter: --state.counter };
  }
}

export default CounterButtonController;
