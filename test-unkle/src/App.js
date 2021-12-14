import './App.css';
import Tooltip from './Components/Tooltip';

const ContentComponent = () => (
  <>
    Tooltip with component content
    <button>I'm a button</button>
  </>
)

function App() {
  return (
    <div className="App">
      <Tooltip type='enter' content='Tooltip with plain text'>
        <button>Button with Tooltip</button>
      </Tooltip>
      <Tooltip type='focus' content={<ContentComponent />}>
        <input placeholder='Appear only on focus'></input>
      </Tooltip>
      <Tooltip type='both' content={<ContentComponent />}>
        <input placeholder='Appear on mouseEnter and focus'></input>
      </Tooltip>
      <Tooltip>
        <button>Bad props</button>
      </Tooltip>
    </div>
  );
}

export default App;
