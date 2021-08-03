export function TeamOverview({ team }) {

    return (
        <div className="team-overview">
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th className="align-left">Name</th>
                        <th>
                            <span>🥅</span>
                        </th>
                        <th>
                            <span>🟨</span>
                        </th>
                        <th>
                            <span>✌</span>
                        </th>
                        <th>
                            <span>🟥</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        team.players.map(player => (
                            <tr key={player.key}>
                                <td>{player.number}</td>
                                <td className="align-left">{player.firstName} {player.lastName}</td>
                                <td>{player.goals + player.penaltyGoals}</td>
                                <td>{player.warning}</td>
                                <td>{player.timePenalty}</td>
                                <td>{player.disqualification}</td>
                            </tr>
                        ))
                    }
                    
                </tbody>
            </table>
        </div>
    )
}