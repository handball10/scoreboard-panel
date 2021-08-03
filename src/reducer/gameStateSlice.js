import { createSlice } from '@reduxjs/toolkit';

import {
    TEAM_HOME,
    TEAM_AWAY,
    ADVERTISING_MODES
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
                color: '#00ffff',
                players: []
            },
            away: {
                shortName: 'HSG Hanau',
                longName: 'HSG Hanau',
                color: '#000000',
                players: []
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
    events: [],
    advertising: {
        items: [
            {
                type: 'stats',
                timeout: 15000,
                data: {}
            },
            // {
            //     type: 'youtube',
            //     src: 'https://www.youtube.com/watch?v=Eptf0zpzeHY'
            // },
            {
                type: 'video',
                src: 'http://localhost:8000/file/?file=RTpcUHJvamVjdHNcVmlkZW9cTGl2ZVN0cmVhbWluZ1xMaW5kZW5DdXAgMjAyMVxLaXJtZXMtVHJhaWxlci0yX3NtYWxsLm1wNA=='
            },
            {
                id: 'advertising-item-1',
                type: 'image',
                src: 'https://upload.wikimedia.org/wikipedia/de/4/4b/Bauhaus_%28Baumarkt%29_logo.svg',
                timeout: 6000
            },
            {
                id: 'advertising-item-2',
                type: 'image',
                src: 'https://www.sparkasse-wetzlar.de/content/dam/myif/spk-wetzlar/work/bilder/logos/spk-logo-druck.png'
            },
            {
                id: 'advertising-item-3',
                type: 'image',
                src: 'http://localhost:8000/file?file=C:\\Users\\flori\\Pictures\\2021\\Hochzeitsauswahl\\5D4_0087.JPG'
            }
        ],
        mode: ADVERTISING_MODES.FULL_SIZE
    }
};

export const gameStateSlice = createSlice({
    name: 'gameState',
    initialState,
    reducers: {
        heartbeat: (state, action) => {
            state.data = { ...action.payload };
        },
        partialChange: (state, action) => {
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
        },
        advertisingHandler: (state, action) => {

            const {
                items = [],
                mode = ADVERTISING_MODES.NONE,
                duration = 5000
            } = action.payload;

            state.advertising.items = items;
            state.advertising.mode = mode;

        }
    }
});

export const {
    heartbeat,
    eventHandler,
    partialChange,
    advertisingHandler
} = gameStateSlice.actions;

export const selectGameState = state => state.game.data;
export const selectAdvertising = state => state.game.advertising;

export default gameStateSlice.reducer;

