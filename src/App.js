import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Box, Grommet} from "grommet";
import * as Themes from "grommet/themes";
import {Route} from "react-router-dom";
import ApkDetail from "./ApkDetail";

const theme = {
    global: {
        font: {
            family: 'Roboto',
            size: '14px',
            height: '20px',
        },
    },
};
const {ipcRenderer, electron} = window.require('electron');

const App = () => {

    return (
        <Grommet theme={theme} full={true}>
            <Box fill={true}>
                <Route path="/" exact component={ApkDetail}/>
            </Box>
        </Grommet>
    );

}

export default App;
