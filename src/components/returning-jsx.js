import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export function Sample () {
    return (
        [
            <p key="1">I am</p>,
            <p key="2">returning a list</p>,
            <p key="3">of things!</p>
        ]
    );
}

const element = <Sample />

