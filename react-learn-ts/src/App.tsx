// import './App.css';
import UpdateParent from './components/UpdateParent';
import EventSequence from './components/EventSequence';
function App() {
  console.log('app render');
  return (
    <div className="App">
      <UpdateParent></UpdateParent>
      <EventSequence></EventSequence>
    </div>
  );
}

export default App;
