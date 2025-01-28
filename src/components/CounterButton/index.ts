import { Observable, createView } from "../../utils";
import { ICounterButtonModel } from "./model";
import { getCounterButtonView } from "./view";
import CounterButtonController from "./controller";

export { getCounterButtonView } from "./view";
export type { ICounterButtonModel } from "./model";

interface ICounterButtonProps {
  onIncrement?: () => void;
  onDecrement?: () => void;
}

const defaultController = new CounterButtonController();
const observable = new Observable<ICounterButtonModel>({ counter: 0 });

export const CounterButton = createView<
  ICounterButtonModel,
  ICounterButtonProps
>(observable, (model: ICounterButtonModel) => {
  const onIncrement = () =>
    observable.setState(defaultController.dispatch(model, "increment"));
  const onDecrement = () =>
    observable.setState(defaultController.dispatch(model, "decrement"));
  return () => getCounterButtonView(model, onIncrement, onDecrement);
});
