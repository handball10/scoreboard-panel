import React, { useReducer } from 'react';

import ScorePanel from './components/scorepanel/scorepanel';
import InfoDisplay from './components/infodisplay/infodisplay';
import ReactNotification from 'react-notifications-component';
import YouTube from 'react-youtube';
import { Advertising } from './components/advertising/Advertising';
import { useSelector } from 'react-redux';
import { selectGameState } from './reducer/gameStateSlice';
import classNames from 'classnames';

import './App.scss';
import { TEAM_HOME } from './constants/constants';

function App() {

  const {
    gameSettings
  } = useSelector(selectGameState);

  return (
    <div className={
      classNames('App', { [`theme-${gameSettings.theme}`]: true })
    }>
      <ReactNotification />
      <ScorePanel />
      <Advertising />
      {/* <InfoDisplay type={'penalty'} team={'HSG Dutenhofen/Münchholzhausen'} player={{ number: 25, name: 'Florian Gümbel' }} quantity={2} theme={'dhb'} /> */}
    </div>
  );
}

export default App;
