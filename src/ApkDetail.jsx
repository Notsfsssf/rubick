import React, {useEffect, useState} from 'react';
import {Box, Grid} from "grommet";

const ApkDetail = () => {
    const [stdout, setStdOut] = useState("")
    const [hashome, setHasHome] = useState(false)
    useEffect(() => {
        const fs = window.require('fs')
        const electron = window.require('electron');
        const remote = electron.remote;
        const env = remote.process.env
        console.log(env.ANDROID_HOME)
        if (env.ANDROID_HOME)
            setHasHome(true)
    }, [])
    const start1 = (event) => {
        for (let f of event.dataTransfer.files) {
            if (f.path.split(".")[f.path.split(".").length - 1] !== "apk") {
                continue
            }
            const fs = window.require('fs')
            const electron = window.require('electron');
            const remote = electron.remote;
            const env = remote.process.env
            console.log(env.ANDROID_HOME)
            const android_home = env.ANDROID_HOME
            const build_tools_dir = android_home + "/build-tools"
            const files = fs.readdirSync(build_tools_dir)
            files.forEach(function (file, index) {

                var curPath = build_tools_dir + "/" + file;
                console.log(curPath)
                if (fs.statSync(curPath).isDirectory()) {
                    console.log(curPath + "/appt.exe")
                    if (fs.existsSync(curPath + "/aapt.exe")) {
                        const exec = window.require('child_process').exec;
                        let cmdStr = 'aapt.exe dump badging ' + f.path;
                        console.log(cmdStr)
                        let workerProcess = exec(cmdStr, {cwd: curPath});
                        workerProcess.stdout.on('data', function (data) {
                            setStdOut(data)
                        });
                        workerProcess.stderr.on('data', function (data) {
                            console.log('stderr: ' + data);
                        });
                        workerProcess.on('close', function (code) {
                            console.log('out code：' + code);
                        });
                    }
                }
            })
        }

    }
    if (hashome)
        return (<>
            <Grid
                fill
                rows={["auto", "flex"]}
                columns={["small", "flex"]}
                gap="small"
                areas={[
                    {name: 'header', start: [0, 0], end: [0, 1]},
                    {name: 'nav', start: [1, 0], end: [1, 1]},
                ]}
            >

                <Box gridArea="header" background="brand" justify={"center"} align={"center"}>
                    <Box onDragOver={(event) => {
                        event.preventDefault()
                    }} onDrop={start1}> APK</Box>
                </Box>
                <Box gridArea="nav" background="light-5">
                    <p>{stdout}</p>
                </Box>
            </Grid>
        </>)
    else return (<>
        <Box align={"center"} justify={"center"}>
            ANDROID_HOME WAS NOT FOUND
        </Box>
    </>)
}
export default ApkDetail;
