# Реализация паттерна Observer

Общие навыки (2)
[Ссылка на задачу](https://ru.yougile.com/team/40222ffe7795/%D0%94%D0%B8%D0%BC%D0%B0#DIM-16)

## Запустить локально

### Установка зависимостей:

```bash
npm i
```

### Запустить на [http://localhost:5173/](http://localhost:5173/):

```bash
npm run dev
```

## Немного теории

[Почитать про Observer Pattern](https://www.patterns.dev/vanilla/observer-pattern)

## Где реализован Observer

см. src\utils\Observable.ts

## Какие ещё паттерны были использованы

[Module Pattern](https://www.patterns.dev/vanilla/module-pattern)
см. общую структуру проекта
[High Order Function](https://www.geeksforgeeks.org/javascript-higher-order-functions/) включая [Composition of Functions](https://www.geeksforgeeks.org/composition-of-functions/)
см. src\utils\createView.ts

Так же в этом небольшом примере целился в применение шаблонов MVC/MVVM, получилось скорее MVVM

![mvvm](https://habrastorage.org/r/w1560/getpro/habr/post_images/d24/283/37f/d2428337fb4bc648eab3a9f9db259709.jpg)

Где экземпляры Observable, это по сути Model, за View - getCounterButtonView, ViewModel - это прослойка в виде createView. Так же присутствует прослойка в виде контроллера для компонента (см. src\components\CounterButton\controller\index.ts) 

