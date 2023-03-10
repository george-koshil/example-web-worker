Хук для виконання функції в іншому потоці

```js static
const {
  result,
  resetResult,
  errorMessage,
  setErrorMessage,
  runTask,
  currentWorker,
  inProcess,
} = useWebWorker(someFunction);
```

> someFunction - функція яка виконує тяжкі розрахунки і потенційно може заблокувати головний потік

> result- результат роботи функції - someFunction

> runTask - фунція яка запускає worker, в параметрах приймає аргументи для someFunction

> inProcess - булеве значення, яке показує що воркер в процесі роботи

> currentWorker - інстанс поточного воркера, можна його зупинити використавши команду currentWorker.terminate()

> resetResult - функція яка видаляє результат

> errorMessage - повідомлення про помилку

> setErrorMessage - можна видалити повідомлення про помилку за допомогою цієї функції
