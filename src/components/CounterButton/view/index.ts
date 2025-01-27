import { ICounterButtonModel } from "../model";

export const getCounterButtonView = (model: ICounterButtonModel) => `<div>
    <div class="card">
      <button id="counter" type="button">Счётчик: ${model.counter}</button>
    </div>
  </div>`;
