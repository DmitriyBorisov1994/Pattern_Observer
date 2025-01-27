export class Observable<T> {
  // Идея следующая Observable работает с определенной моделью данных
  model: T;
  // А список подпичиков рендер функции, которые завязаны на конкретной модели
  observers: ((model: T) => void)[];
  constructor(model: T) {
    this.model = model;
    this.observers = [];
  }
  // При изменении модели оповещаем подписчиков
  setModel(model: T) {
    this.model = model;
    this.notify(this.model);
  }
  // Добавляем подписчиков
  subscribe(func: (model: T) => void) {
    this.observers.push(func);
  }
  // Удаляем подпичиков. Не используется
  unsubscribe(func: (model?: T) => void) {
    this.observers = this.observers.filter((observer) => observer !== func);
  }
  // Функция оповещения подписчиков
  notify(model: T = this.model) {
    this.observers.forEach((observer) => observer(model));
  }
}
