import React, { useReducer } from 'react';

import ScorePanel from './components/scorepanel/scorepanel';
import InfoDisplay from './components/infodisplay/infodisplay';
import ReactNotification from 'react-notifications-component';

function App() {
  return (
    <div className="App">
      <ReactNotification />
      <ScorePanel />
    </div>
  );
}

export default App;
