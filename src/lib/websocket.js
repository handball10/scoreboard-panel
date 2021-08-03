import { 
    GAME_EVENT,
    HEARTBEAT,
    PARTIAL_EVENT,
    ADVERTISING,
    PING,
    PONG
} from '../actions/actions';

import { store } from '../app/store';

import {
    heartbeat,
    eventHandler,
    partialChange,
    advertisingHandler,

} from '../reducer/gameStateSlice';

const UNIQUE_ID = 'scoreboard';

const W3CWebSocket = require('websocket').w3cwebsocket;

 
const client = new W3CWebSocket('ws://localhost:8080/', 'echo-protocol');
 
client.onerror = function() {
    console.log('Connection Error');
};
 
client.onopen = function() {
    console.log('WebSocket Client Connected');
 
    websocketApi.send({
        event: PING
    });
};
 
client.onclose = function() {
    console.log('echo-protocol Client Closed');
};
 
client.onmessage = function(e) {
    console.log(e.data);

    if (typeof e.data === 'string') {
        // const data = JSON.parse(e.data);
        const { event, payload } = JSON.parse(e.data);

        if (event === HEARTBEAT || event === PONG) {
            store.dispatch(heartbeat(payload));
        }
        else if (event === GAME_EVENT) {
            store.dispatch(eventHandler(payload));
        }
        else if (event === PARTIAL_EVENT) {
            store.dispatch(partialChange(payload));
        }
        else if (event === ADVERTISING) {
            store.dispatch(advertisingHandler(payload));
        }
    }
};

const websocketApi = {
    send: payload => client.send(JSON.stringify({
        ...payload
    }))
};

export default websocketApi;