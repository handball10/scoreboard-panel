import React, { Component } from 'react';
import classnames from 'classnames';

import defaultTemplate from './templates/default';
import dhbTemplate from './templates/dhb';

import './infodisplay.scss';
import { selectGameState } from '../../reducer/gameStateSlice';
import { useSelector } from 'react-redux';

import {
    DATA_TYPES
} from '../../constants/constants';

const MESSAGES = {
    [DATA_TYPES.PENALTY]: (quantity) => `${quantity}. Zeitstrafe`,
    [DATA_TYPES.GOAL]: (quantity) => `${quantity}. Tor`,
    [DATA_TYPES.YELLOW_CARD]: () => 'Gelbe Karte',
    [DATA_TYPES.RED_CARD]: () => 'Rote Karte',
    [DATA_TYPES.BLUE_CARD]: () => 'Blaue Karte'
};

const THEME_TEMPLATES = {
    'default': defaultTemplate,
    'dhb': dhbTemplate,
};

export default function InfoDisplay({ type, team, player, quantity = 0, theme }) {

    const detailClasses = classnames({
        'data': true,
        'time-penalty': type === DATA_TYPES.PENALTY,
        'goal': type === DATA_TYPES.GOAL,
        'yellow-card': type === DATA_TYPES.YELLOW_CARD,
        'red-card': type === DATA_TYPES.RED_CARD,
        'blue-card': type === DATA_TYPES.BLUE_CARD
    });

    const message = MESSAGES[type](quantity);

    const payload = {
        type, team, player, quantity,
        message, detailClasses
    };

    // const {
    //     gameSettings
    // } = useSelector(selectGameState);
    

    return (
        <div className='info-display'>
            {THEME_TEMPLATES[theme](payload)}
        </div>
    )
}

// export default class InfoDisplay extends Component {

//     state = {
//         mode: DISPLAY_MODES.IN,
//         data: null
//     }

//     constructor(props) {
//         super(props);
//     }

//     render() {

//         const {
//             data,
//             mode
//         } = this.state;

//         const classes = classnames(
//             'info-display',
//             {
//                 [mode]: true
//             }
//         );

//         return (
//             <div className={classes}>
//                 <div className="number">
//                     3
//                 </div>
//                 <div className="details">
//                     <div className="team">HSG Dutenhofen/Münchholzhausen</div>
//                     <div className="name">Lukas Gümbel</div>
//                     <div className="data time-penalty">2min Zeitstrafe (2.)</div>
//                     {/* <div className="data goal">5. Tor</div> */}
//                     {/* <div className="data yellow-card">Gelbe Karte</div> */}
//                     {/* <div className="data red-card">Rote Karte</div> */}
//                 </div>
//             </div>
//         )
//     }
// }