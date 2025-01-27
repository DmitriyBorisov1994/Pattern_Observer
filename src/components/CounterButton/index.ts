import { Observable } from "../../utils/Observable";
import { ICounterButtonModel } from "./model";
import { getCounterButtonView } from "./view";
import CounterButtonController from "./controller/CounterButtonController";

export { getCounterButtonView } from "./view";
export type { ICounterButtonModel } from "./model";

interface ICounterButtonProps {
  parent: HTMLElement | null;
  model: Observable<ICounterButtonModel>;
  controller?: CounterButtonController;
}

const defaultController = new CounterButtonController();

// TODO унифицировать под общую ф-ю / класс
export function CounterButton({
  parent,
  model,
  controller = defaultController,
}: ICounterButtonProps) {
  const init = () => {
    if (parent) {
      const { view, getIncrementBtn, getDecrementBtn } = getCounterButtonView(
        model.model,
        parent
      );
      parent.innerHTML = view;
      getIncrementBtn()?.addEventListener("click", () => {
        model.setModel(controller.increment(model.model));
      });
      getDecrementBtn()?.addEventListener("click", () => {
        model.setModel(controller.decrement(model.model));
      });
    }
  };

  init();

  model.subscribe(init);
}
