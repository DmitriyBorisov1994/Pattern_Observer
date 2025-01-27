import { ICounterButtonModel } from "../model";

export const getCounterButtonView = (
  model: ICounterButtonModel,
  parent: HTMLElement
) => ({
  view: `<div>
    <div class="card">
      <button id="incrementBtn" type="button">+</button>
      <button id="decrementBtn" type="button">-</button>
      <span>Счётчик: ${model.counter}</span>
    </div>
  </div>`,
  getIncrementBtn: () => parent.querySelector<HTMLDivElement>("#incrementBtn"),
  getDecrementBtn: () => parent.querySelector<HTMLDivElement>("#decrementBtn"),
});
