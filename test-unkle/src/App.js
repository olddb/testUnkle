import './App.css';
import Tooltip from './Components/Tooltip';

const ContentComponent = () => <div>Tooltip with component content</div>

const propsButton = {
  type: 'enter',
  content: 'Tooltip with plain text'
}
const propsInputFocus = {
  type: 'focus',
  content: <ContentComponent />
}
const propsInputBoth = {
  type: 'both',
  content: <ContentComponent />
}
const badProps = {}

function App() {
  return (
    <div className="App">
      <Tooltip {...propsButton}>
        <button>Button with Tooltip</button>
      </Tooltip>
      <Tooltip {...propsInputFocus}>
        <input placeholder='Appear only on focus'></input>
      </Tooltip>
      <Tooltip {...propsInputBoth}>
        <input placeholder='Appear on mouseEnter and focus'></input>
      </Tooltip>
      <Tooltip {...badProps}>
        <button>Bad props</button>
      </Tooltip>
    </div>
  );
}

export default App;
