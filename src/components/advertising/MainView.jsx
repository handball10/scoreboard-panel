import { useEffect } from "react";
import { useState } from "react";
import YouTube from "react-youtube";
import ReactPlayer from 'react-player';
import { ADVERTISING_ITEM_TYPES } from "../../constants/constants";
import { Overview } from "./Overview";
import classNames from "classnames";

const timerFunction = (callback, timeout = 5000) => setTimeout(callback, timeout);
const tick = (currentValue, items = [], setter) => () => setter((currentValue + 1) >= items.length ? 0 : currentValue + 1);
const isVideoItem = type => [ ADVERTISING_ITEM_TYPES.VIDEO, ADVERTISING_ITEM_TYPES.YOUTUBE ].includes(type);
const isOverview = type => [ ADVERTISING_ITEM_TYPES.STATS ].includes(type);

const DEFAULT_TIMEOUT = {
    [ADVERTISING_ITEM_TYPES.STATS]: 10000,
    [ADVERTISING_ITEM_TYPES.IMAGE]: 5000
};

const youtubeOptions = {
    height: '1080px',
    width: '1920px ',
    playerVars: {
        autoplay: 1,
        controls: 0,
        modestbranding: 1,
        enablejsapi: 1,
        showInfo: 0
    }
}

function YouTubeItem({ src, next }) {

    const youtubeId = new URLSearchParams(new URL(src).search).get('v');

    return (
        <ReactPlayer
            url={src}
            onEnded={() => next()}
            playing={true}
            config={{ 
                youtube: { 
                    playerVars: { 
                        autoplay: 1,
                        controls: 0,
                        modestbranding: 1,
                        origin: 'localhost',
                        enablejsapi: 1
                    }
                },
            }}
            height="100%"
            width="100%"
            controls={false}
            playing={true}
            onPlay={() => console.log('PLAING')}
            
        />
    )
    // return (
    //     <YouTube videoId={youtubeId} opts={youtubeOptions} onEnd={() => next()} />
    // );

}

function VideoItem({ src, next }) {
    return (
        <ReactPlayer
            url={src}
            onEnded={() => next()}
            height="100%"
            width="100%"
            controls={true}
            playing={true}
            onPlay={() => console.log('PLAING')}
            
        />
    )
}

function ImageItem({ src, type }) {
    return (
        <div className="image-item">
            <img src={src} />
        </div>
    )
}

export function MainView({ items = [] }) {

    const [ currentItemIndex, setCurrentItem ] = useState(0);

    const currentItem = items[currentItemIndex];

    useEffect(() => {
        if ([ ADVERTISING_ITEM_TYPES.IMAGE, ADVERTISING_ITEM_TYPES.STATS ].includes(items[currentItemIndex]?.type)) {
            timerFunction(tick(currentItemIndex, items, setCurrentItem), currentItem.timeout || DEFAULT_TIMEOUT[items[currentItemIndex].type]);
        }
    });

    let ViewComponent;

    switch (currentItem.type) {
        case ADVERTISING_ITEM_TYPES.IMAGE: { ViewComponent = ImageItem; break; }
        case ADVERTISING_ITEM_TYPES.YOUTUBE: { ViewComponent = YouTubeItem; break; }
        case ADVERTISING_ITEM_TYPES.VIDEO: { ViewComponent = VideoItem; break; }
        case ADVERTISING_ITEM_TYPES.STATS: { ViewComponent = Overview; break; }
        default: ViewComponent = (<p>No viewer!</p>);
    }

    const classes = classNames({
        'main-view': true,
        'no-background': isOverview(currentItem.type)
    });

    return (
        <div className={classes}>
            <ViewComponent 
                {...currentItem}
                {...(isVideoItem(currentItem.type) ? { next: tick(currentItemIndex, items, setCurrentItem) } : {})}
                {...(isOverview(currentItem.type) ? { data: currentItem.data } : {} )}
            />
            <div className="fg-sportfoto">
                <p>Livestreaming by</p>
                <img src="./fgsportfoto.svg" />
            </div>
        </div>
    )

}