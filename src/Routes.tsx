import React from "react"
import { Box, Typography } from "@mui/material"
import backgroundVideo from "./assets/background.webm"
import { BrowserRouter, Routes as ReactRoutes, Route } from "react-router-dom"
import { AppRouting } from "./components/AppRouting"

interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = ({}) => {
    return (
        <Box>
            <video
                autoPlay
                loop
                muted
                style={{
                    pointerEvents: "none",
                    zIndex: -1,
                    position: "absolute",
                    width: "100vw",
                    height: "100vh",
                    objectFit: "cover",
                }}
                src={backgroundVideo}
            ></video>

            <BrowserRouter>
                <ReactRoutes></ReactRoutes>
                <AppRouting />
            </BrowserRouter>
        </Box>
    )
}
