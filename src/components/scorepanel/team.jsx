import Clock from '../clock/clock';
import classnames from 'classnames';

import {
    TEAM_HOME,
    TEAM_AWAY
} from '../../constants/constants';

export default function Team({ team, type, penalties, emptyGoal }) {

    const { 
        shortName,
        color
     } = team;

    const classes = classnames({
        [ type ]: true,
        'section': true,
        'has-empty-goal': emptyGoal[type]
    });

    const colorStyle = { 'backgroundColor': color }; 

    return (
        <div className={classes}>
            <div className="row empty-goal-container">
                <div className="empty-goal">Empty goal</div>
            </div>
            <div className="row team">
                <div className="color" style={colorStyle}></div>
                <div className="name">
                    { shortName }
                </div>
            </div>
            <div className="row">
                <div className="penalties">
                    { 
                        (( penalties.items) || []).filter(({ team }) => team === type).map(({ id, time }) => (
                            <Clock
                                variant="penalty"
                                time={time}
                                key={id}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}