import React, { useEffect } from "react"
import { Box } from "@mui/material"
import { useLocation, useSearchParams } from "react-router-dom"

interface AppRoutingProps {}

export const AppRouting: React.FC<AppRoutingProps> = ({}) => {
    const location = useLocation()
    const pathname = location.pathname

    useEffect(() => {
        const splitted = pathname.split("/app")
        const link = `loucaseco://${splitted[1]}${location.search}`
        console.log(link)
        if (splitted.length > 1) {
            window.location.replace(link)
        }
    }, [pathname])

    return <Box sx={{}}></Box>
}
