import { ICounterButtonModel } from "../model";

export const getCounterButtonView = (model: ICounterButtonModel) => ({
  view: `<div>
    <div class="card">
      <button id="incrementBtn" type="button">+</button>
      <button id="decrementBtn" type="button">-</button>
      <span>Счётчик: ${model.counter}</span>
    </div>
  </div>`,
  getIncrementBtn: () =>
    document.querySelector<HTMLDivElement>("#incrementBtn"),
  getDecrementBtn: () =>
    document.querySelector<HTMLDivElement>("#decrementBtn"),
});
