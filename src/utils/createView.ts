import { Observable } from "./Observable";

export const createView = <T, D>(
  observable: Observable<T>,
  callback: (state: T) => (props: D & { element: HTMLElement }) => HTMLElement
) => {
  return (props: D & { element: HTMLElement }) => {
    const subscriber = (model: T) => {
      props.element.innerHTML = "";
      props.element.appendChild(callback(model)(props));
    };
    observable.subscribe(subscriber);
    return { render: () => subscriber(observable.state), observable };
  };
};
