import { CounterButton, ICounterButtonModel } from "./components/CounterButton";
import "./style.css";
import { Observable } from "./utils/Observable.ts";

const render = () => {
  CounterButton({
    parent: document.querySelector<HTMLDivElement>("#counter1"),
    model: new Observable<ICounterButtonModel>({ counter: 0 }),
  });
  CounterButton({
    parent: document.querySelector<HTMLDivElement>("#counter2"),
    model: new Observable<ICounterButtonModel>({ counter: 0 }),
  });
};

render();
