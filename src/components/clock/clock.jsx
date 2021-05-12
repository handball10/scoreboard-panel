import React, { Component } from 'react';

import './clock.scss';

const formatSeconds = (s) => (s-(s%=60))/60+(9<s?':':':0')+s;

export default function Clock(props) {

    const { 
        variant,
        time
    } = props;

    const classes = classnames({
        clock: true,
        [`is-${variant}`]: true
    });

    return (
        <div className={classes}>
            {formatSeconds(time)}
        </div>
    )
};