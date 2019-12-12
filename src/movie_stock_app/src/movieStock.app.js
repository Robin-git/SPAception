import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Home from './App';

function domElementGetter() {
    return document.getElementById("searchApp")
}

const reactLifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: Home,
    domElementGetter,
})

export const bootstrap = [
    reactLifecycles.bootstrap,
];

export const mount = [
    reactLifecycles.mount,
];

export const unmount = [
    reactLifecycles.unmount,
];
