import { ICounterButtonModel } from "../model";

export const getCounterButtonView = (
  model: ICounterButtonModel,
  onIncrement: any,
  onDecrement: any
) => {
  const card = document.createElement("div", {});
  const increment = document.createElement("button");
  const decrement = document.createElement("button");
  const result = document.createElement("span");
  const smile = document.createElement("span");

  card.className = "card";
  increment.id = "incrementBtn";
  decrement.id = "decrementBtn";

  result.className = "result";
  smile.className = "smile";

  increment.textContent = "+";
  decrement.textContent = "-";
  result.textContent = `Счётчик пива: ${model.counter}`;
  smile.innerHTML = (() => {
    if (model.counter === 0) return "&#128528;";
    if (model.counter > 15) return "&#129326;";
    if (model.counter > 10) return "&#129314;";
    if (model.counter > 5) return "&#129322;";
    if (model.counter > 0) return "&#128578;";
    if (model.counter < 0) return "&#128554;";
    return "";
  })();

  increment.addEventListener("click", onIncrement);
  decrement.addEventListener("click", onDecrement);

  [increment, decrement, result, smile].forEach((el) => card.appendChild(el));

  return card;
};
