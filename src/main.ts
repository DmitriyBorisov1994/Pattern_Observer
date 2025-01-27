import { CounterButton, ICounterButtonModel } from "./components/CounterButton";
import "./style.css";
import { Observable } from "./utils/Observable.ts";

CounterButton({
  parent: document.querySelector<HTMLDivElement>("#app"),
  model: new Observable<ICounterButtonModel>({ counter: 0 }),
});
