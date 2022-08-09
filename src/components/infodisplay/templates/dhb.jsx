import { DATA_TYPES } from '../../../constants/constants';
import './dhb.scss';

const detailAppendixElement = (type) => {
    console.log(type);
    switch(type) {
        case DATA_TYPES.BLUE_CARD: return (
            <div className="card blue">card</div>
        );
        case DATA_TYPES.RED_CARD: return (
            <div className="card red">card</div>
        );
        case DATA_TYPES.YELLOW_CARD: return (
            <div className="card yellow">card</div>
        );
        case DATA_TYPES.PENALTY: return (
            <div className="penalty">2 MIN</div>
        );
        default: return (<></>);
    }
}

function template({ type, team, player, quantity = 0, detailClasses, message }) {
    return (
        <div className='info-display theme-dhb'>
            <div className="circle">
                <span className="left"></span>
                <span className="right"></span>
            </div>
            
            <div className="details">
                <div className="header">
                    { player.number && (
                        <div className="number">
                            {player.number}
                        </div>
                    )}
                    <div className="name">{player.name}</div>

                </div>
                <div className="subline">
                    <div className="team">{team}</div>
                    <div className={detailClasses}>{message}</div>
                </div>
            </div>
            <div className="appendix">
                {detailAppendixElement(type)}
            </div>
        </div>
    )
}

export default template;