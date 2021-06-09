import {
  HEARTBEAT,
  heartbeatAction
} from '../actions/heartbeat';

export const initialState = {
  time: {
    gameTime: 0
  },
  teams: {
    home: {
      shortName: 'HSG D/M',
      longName: 'HSG Dutenhofen/Münchholzhausen',
      color: '#ffffff'
    },
    away: {
      shortName: 'HSG Hanau',
      longName: 'HSG Hanau',
      color: '#ffffff'
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
  events: {}
};

export const reducer = (state, action) => {
  switch (action.type) {
    case HEARTBEAT: return heartbeatAction(state, action.payload);
    default: return state;
  }
}
