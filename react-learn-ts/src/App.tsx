// import './App.css';
import UpdateParent from './components/UpdateParent';
import EventSequence from './components/EventSequence';
import SetState from './components/SetState';
import UseHook from './components/UseHook';
function App() {
  console.log('app render');
  return (
    <div className="App">
      <UpdateParent></UpdateParent>
      <EventSequence></EventSequence>
      <SetState></SetState>
      <UseHook></UseHook>
    </div>
  );
}

export default App;
