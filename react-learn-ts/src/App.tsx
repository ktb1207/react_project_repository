// import './App.css';
import UpdateParent from './components/UpdateParent';
import EventSequence from './components/EventSequence';
import SetState from './components/SetState';
function App() {
  console.log('app render');
  return (
    <div className="App">
      <UpdateParent></UpdateParent>
      <EventSequence></EventSequence>
      <SetState></SetState>
    </div>
  );
}

export default App;
