import { useSelector } from "react-redux";
import { TEAM_AWAY, TEAM_HOME } from "../../constants/constants";
import { selectGameState } from "../../reducer/gameStateSlice";
import { TeamOverview } from "../teamOverview/TeamOverview";

import './Overview.scss';

export function Overview() {

    const { teams, goals, emptyGoal, time: { gameTime }, penalties, timeout } = useSelector(selectGameState);

    return (
        <div className="overview">
            <TeamOverview team={teams[TEAM_HOME]} />
            <TeamOverview team={teams[TEAM_AWAY]} />
        </div>
    )
}