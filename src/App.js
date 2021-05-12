import ScorePanel from './components/scorepanel/scorepanel';
import InfoDisplay from './components/infodisplay/infodisplay';

function App() {
  return (
    <div className="App">
      <ScorePanel config={config} />
      <InfoDisplay />
    </div>
  );
}

export default App;
