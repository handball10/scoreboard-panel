import React, { Component } from 'react';

import Clock from '../clock/clock';
import './scorepanel.scss';
import Team from './team';

import {
    TEAM_HOME,
    TEAM_AWAY
} from '../../constants/constants';

export default function ScorePanel(props) {

    const { teams, penalties, goals, emptyGoal, gameTime } = props.state;

    return (
        <div className="scorepanel">
            <div className="center-row">
                <Team team={teams.home} type="home" penalties={penalties} emptyGoal={emptyGoal} />
                <div className="game">
                    <Clock variant="regular" time={gameTime} />
                    <div className="goals">
                        { `${goals.home}:${goals.away}` }
                    </div>
                </div>
                <Team team={teams.away} type="away" penalties={penalties} emptyGoal={emptyGoal} />
            </div>
        </div>
    );
}