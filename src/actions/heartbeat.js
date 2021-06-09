export const HEARTBEAT = 'heartbeat';

export const heartbeatAction = (state, payload) => ({
    ...state,
    ...payload
});