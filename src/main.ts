import { CounterButton, ICounterButtonModel } from "./components/CounterButton";
import "./style.css";
import { Observable } from "./utils/Observable.ts";

const counterBtn = new Observable<ICounterButtonModel>({ counter: 0 });

const { subscriber } = CounterButton({
  parent: document.querySelector<HTMLDivElement>("#app"),
  model: counterBtn.model,
  eventSetter: () => {
    document
      .querySelector<HTMLDivElement>("#counter")
      ?.addEventListener("click", () => {
        console.log("click");
        counterBtn.setModel({ counter: ++counterBtn.model.counter });
      });
  },
});

counterBtn.subscribe(subscriber);

counterBtn.notify();
