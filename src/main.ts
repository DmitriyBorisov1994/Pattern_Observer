import { CounterButton } from "./components/CounterButton";
import "./style.css";

const { render, observable } = CounterButton({
  element: document.querySelector<HTMLDivElement>("#app") as HTMLElement,
});

const beerAnimation = (state: { counter: number }) => {
  const beerContainer = document.querySelector(".initial-snow") as Element;

  const oneBeer = `🍺`;
  const sadFace = `😥`;
  const twoBeers = `🍻`;

  for (const child of beerContainer?.children) {
    if (state.counter < 0) {
      child.innerHTML = sadFace;
    }
    if (state.counter > 10) {
      child.innerHTML = twoBeers;
    }
    if (state.counter > 0 && state.counter <= 10) {
      child.innerHTML = oneBeer;
    }
  }

  state.counter !== 0 && beerContainer?.classList.add("visible");

  setTimeout(() => {
    beerContainer?.classList.remove("visible");
  }, 2000);
};

observable.subscribe((state) => console.log("counter is", state.counter));
observable.subscribe(beerAnimation);

render();
