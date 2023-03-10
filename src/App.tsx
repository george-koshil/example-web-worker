import useWebWorker from './hooks/useWebWorker'
import { blockMainStream } from './utils/blockMainStream';
import './App.css';

function App() {
  const { result, runTask } = useWebWorker(blockMainStream);

  return (
    <div className="App">
      <input className='mb15'/>
      <button onClick={() => blockMainStream()} className='mb15'>Click to call function that block main steam at least 5 sec</button>
      <button onClick={() => runTask()} className='mb15'>Click to call function that block main steam at least 5 sec with webWorker</button>
      <label>{`Result - ${result || 'N/A'}`}</label>
    </div>
  );
}

export default App;
