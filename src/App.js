import React, { useReducer } from 'react';

import ScorePanel from './components/scorepanel/scorepanel';
import InfoDisplay from './components/infodisplay/infodisplay';
import ReactNotification from 'react-notifications-component';
import YouTube from 'react-youtube';
import { Advertising } from './components/advertising/Advertising';

function App() {
  return (
    <div className="App">
      <ReactNotification />
      <ScorePanel />
      <Advertising />
    </div>
  );
}

export default App;
