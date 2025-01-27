import { ICounterButtonModel } from "./model";
import { getCounterButtonView } from "./view";

export { getCounterButtonView } from "./view";
export type { ICounterButtonModel } from "./model";

interface ICounterButtonProps {
  parent: HTMLElement | null;
  model: ICounterButtonModel;
  eventSetter: () => void;
}

// TODO унифицировать под общую ф-ю / класс
export function CounterButton({
  parent,
  model,
  eventSetter,
}: ICounterButtonProps) {
  if (parent) {
    parent.innerHTML = getCounterButtonView(model);
  }
  eventSetter();
  return {
    // При помощи замыканий делаем такой финт
    subscriber: (model: ICounterButtonModel) =>
      CounterButton({
        model: model,
        parent: parent,
        eventSetter: eventSetter,
      }),
  };
}
