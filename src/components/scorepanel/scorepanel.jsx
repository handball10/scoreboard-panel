import React, { Component } from 'react';

import Clock from '../clock/clock';
import './scorepanel.scss';
import Team from './team';

import {
    TEAM_HOME,
    TEAM_AWAY
} from '../../constants/constants';

import {
    selectGameState
  } from '../../reducer/gameStateSlice';

import { useSelector } from 'react-redux';
import classNames from 'classnames';

export default function ScorePanel() {

    const { teams, goals, emptyGoal, time: { gameTime }, penalties, timeout } = useSelector(selectGameState);

    const currentGameTimeoutState = (
        Object.entries(timeout).find(([ key, value ]) => value.isActive)
        || [, { isActive: false, label: '' }]
    )[1];

    const timeoutClasses = classNames({
        'timeout-reason': true,
        'is-active': currentGameTimeoutState.isActive
    })

    return (
        <div className="scorepanel">
            <div className="center-row">
                <Team team={teams.home} type={TEAM_HOME} penalties={penalties} emptyGoal={emptyGoal} />
                <div className="game">
                    <Clock variant="regular" time={gameTime} />
                    <div className="goals">
                        <span className="home">{goals.home}</span>
                        <span className="separator">:</span>
                        <span className="guest">{goals.away}</span>
                    </div>
                    <div className={timeoutClasses}>
                        {currentGameTimeoutState.label}
                    </div>
                </div>
                <Team team={teams.away} type={TEAM_AWAY} penalties={penalties} emptyGoal={emptyGoal} />
            </div>
        </div>
    );
}