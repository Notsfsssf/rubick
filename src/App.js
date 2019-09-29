import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Box, Grid, Grommet, Tab, Tabs} from "grommet";
import * as Themes from "grommet/themes";
import {Route, Switch, withRouter} from "react-router-dom";
import ApkDetail from "./ApkDetail";
import ImageCut from "./ImageCut";

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

const App = (props) => {
    const jumpTo = (url) => {
        props.history.push(url);
    }
    return (
        <Grommet theme={theme} full>
            <Box fill>
                <Tabs flex>
                    <Tab title="Image">
                        <ImageCut/>
                    </Tab>
                    <Tab title="APK">
                        <ApkDetail/>
                    </Tab>
                </Tabs>
            </Box>
        </Grommet>
    );

}

export default App;
