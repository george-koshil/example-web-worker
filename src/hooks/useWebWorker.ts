import { useState } from 'react';

const workerHandler = (fn: Function) => {
  onmessage = event => {
    postMessage(fn(event.data));
  };
};

const useWebWorker = (fn: Function) => {
  const [currentWorker, setCurrentWorker] = useState<Worker | null>(null)
  const [result, setResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [inProcess, setInProcess] = useState(false);

  const runTask = (data?: unknown) => {
    const worker = new Worker(
      URL.createObjectURL(new Blob([`(${workerHandler})(${fn})`]))
    );
    setCurrentWorker(worker)
    setInProcess(true);

    worker.onmessage = event => {
      setResult(event.data);
      setInProcess(false);
      worker.terminate();
    };

    worker.onerror = error => {
      setErrorMessage(error.message);
      worker.terminate();
    };

    worker.postMessage(data);
  };

  const resetResult = () => {
    setResult(null);
  };

  return {
    result,
    resetResult,
    errorMessage,
    runTask,
    currentWorker,
    inProcess,
  };
};

export default useWebWorker;
