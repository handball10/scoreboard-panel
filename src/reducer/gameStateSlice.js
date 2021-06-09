import { createSlice } from '@reduxjs/toolkit';

import {
    TEAM_HOME,
    TEAM_AWAY
} from '../constants/constants';

import InfoDisplay from '../components/infodisplay/infodisplay';
import { store as notificationStore } from 'react-notifications-component';

const initialState = {
    data: {
        time: {
            gameTime: 0
        },
        teams: {
            home: {
                shortName: 'HSG D/M',
                longName: 'HSG Dutenhofen/Münchholzhausen',
                color: '#00ffff'
            },
            away: {
                shortName: 'HSG Hanau',
                longName: 'HSG Hanau',
                color: '#000000'
            },
        }, 
        goals: {
            home: 0,
            away: 0
        },
        emptyGoal: {
            home: false,
            away: false
        },
        penalties: {
            items: []
        },
        timeout: {
            timeout: {
                isActive: false,
                label: 'Auszeit'
            },
            halftime: {
                isActive: false,
                label: 'Halbzeit'
            },
            gameEnd: {
                isActive: false,
                label: 'Spielenede'
            }
        }
    },
    events: []
};

export const gameStateSlice = createSlice({
    name: 'gameState',
    initialState,
    reducers: {
        heartbeat: (state, action) => {
            state.data = { ...action.payload };
        },
        partialChange: (state, action) => {

            console.log('PARTIAL', action.payload);

            const {
                key,
                value
            } = action.payload;

            state.data[key] = value;
        },
        eventHandler: (state, action) => {

            const data = action.payload;

            notificationStore.addNotification({
                insert: 'bottom',
                container: "bottom-left",
                // message: 'Test',
                // type: 'success',
                content: (<InfoDisplay {...data}/>),
                animationIn: ["animate__animated animate__slideInLeft"],
                animationOut: ["animate__animated animate__slideOutLeft"],
                // slidingEnter: ["animate__animated animate__slideInLeft"],
                dismiss: {
                    duration: 6000,
                    waitForAnimation: true
                },
                width: 600
            });
        }
    }
});

export const {
    heartbeat,
    eventHandler,
    partialChange
} = gameStateSlice.actions;

export const selectGameState = state => state.game.data;

export default gameStateSlice.reducer;

