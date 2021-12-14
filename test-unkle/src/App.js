import logo from './logo.svg';
import './App.css';
import Tooltip from './Components/Tooltip';

const Test = () => <div>Tooltip with html</div>

const propsButton = {
  type: 'enter',
  content: 'Tooltip with plain text'
}

const propsInput = {
  type: 'focus',
  content: <Test />
}

const propsInputBoth = {
  type: 'both',
  content: <Test />
}

const propsMissingProps = {}

function App() {
  return (
    <div className="App">
      <Tooltip {...propsButton}>
        <button>Button with Tooltip</button>
      </Tooltip>
      <Tooltip {...propsInput}>
        <input placeholder='Appear only on focus'></input>
      </Tooltip>
      <Tooltip {...propsInputBoth}>
        <input placeholder='Appear on mouseEnter and focus'></input>
      </Tooltip>
      <Tooltip {...propsMissingProps}>
        <button>Bad props</button>
      </Tooltip>
    </div>
  );
}

export default App;
