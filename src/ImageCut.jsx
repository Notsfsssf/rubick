import React, {useEffect, useState} from 'react';
import {Box, Grid} from "grommet/es6";
import styled from "styled-components";

const ImageCut = () => {
    const [stdout, setStdOut] = useState("")
    const [apkAreaBackground, setApkAreaBackground] = useState("brand")
    const OverP = styled.p`
   overflow:scroll;
    `
    const start1 = (event) => {
        setApkAreaBackground("brand")
        for (let f of event.dataTransfer.files) {
        }
    }
    return (
        <>
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

                <Box gridArea="header" background={apkAreaBackground} justify={"center"} align={"center"}
                     onDragOver={(event) => {
                         event.preventDefault()
                         setApkAreaBackground("light-5")
                     }} onDrop={start1}>
                    Image
                </Box>
                <Box gridArea="nav" background="light-5" justify={"center"} align={"center"}>
                    <OverP>{stdout}</OverP>
                </Box>
            </Grid>
        </>
    )
}
export default ImageCut
