import classNames from "classnames";
import { useSelector } from "react-redux";
import { ADVERTISING_MODES } from "../../constants/constants";
import { selectAdvertising } from "../../reducer/gameStateSlice";

import './Advertising.scss';
import { BottomView } from "./BottomView";
import { MainView } from "./MainView";

const youtubeOptions = {
    height: '1080px',
    width: '1920px ',
    playerVars: {
        autoplay: 1,
        controls: 0,
        modestbranding: 1,
        enablejsapi: 1
    }
}

function EmptyAdvertising() {
    return (<div></div>);
}

export function Advertising() {

    const {
        mode,
        items,
        duration
    } = useSelector(selectAdvertising);

    const classes = classNames({
        'advertising': true,
        'is-visible': mode !== ADVERTISING_MODES.NONE
    });

    let AdvertisingComponent;

    switch (mode) {
        case ADVERTISING_MODES.BOTTOM: { AdvertisingComponent = BottomView; break; }
        case ADVERTISING_MODES.FULL_SIZE: { AdvertisingComponent = MainView; break; }
        default: {
            AdvertisingComponent = EmptyAdvertising;
        }
    }

    return (
        <div className={classes}>
            <AdvertisingComponent items={items} />
        </div>
    )
}