import './default.scss';

function template({ type, team, player, quantity = 0, detailClasses, message }) {
    return (
        <div className='info-display theme-default'>
            { player.number && (
                <div className="number">
                    {player.number}
                </div>
            )}
            <div className="details">
                <div className="team">{team}</div>
                <div className="name">{player.name}</div>
                <div className={detailClasses}>{message}</div>
            </div>
        </div>
    )
}

export default template;