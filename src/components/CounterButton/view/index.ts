import { ICounterButtonModel } from "../model";

export const getCounterButtonView = (
  model: ICounterButtonModel,
  parent: HTMLElement
) => ({
  view: `<div>
    <div class="card">
      <button id="incrementBtn" type="button">+</button>
      <button id="decrementBtn" type="button">-</button>
      <span>Счётчик пива: ${model.counter}</span>
      <span>${(function () {
        if (model.counter === 0) return "&#128528;";
        if (model.counter > 15) return "&#129326;";
        if (model.counter > 10) return "&#129314;";
        if (model.counter > 5) return "&#129322;";
        if (model.counter > 0) return "&#128578;";
        if (model.counter < 0) return "&#128554;";
      })()}</span>
    </div>
  </div>`,
  getIncrementBtn: () => parent.querySelector<HTMLDivElement>("#incrementBtn"),
  getDecrementBtn: () => parent.querySelector<HTMLDivElement>("#decrementBtn"),
});
