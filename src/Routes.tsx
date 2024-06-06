import React from "react"
import { ThemeProvider } from "@mui/material"
import { Box } from "@mui/material"
import backgroundVideo from "./assets/background.webm"
import { BrowserRouter, Routes as ReactRoutes, Route } from "react-router-dom"
import { AppRouting } from "./components/AppRouting"
import { Home } from "./pages/Home"
import { useMuiTheme } from "./hooks/useMuiTheme"

interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = ({}) => {
    const theme = useMuiTheme()

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
                <ThemeProvider theme={theme}>
                    <ReactRoutes>
                        <Route path="*" element={<Home />} />
                    </ReactRoutes>
                    <AppRouting />
                </ThemeProvider>
            </BrowserRouter>
        </Box>
    )
}
