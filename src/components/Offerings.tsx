import React from 'react';
import {
    Box,
    Typography,
    Grid,
    Stack,
} from "@mui/material";

export default function Offerings(){
    return (
        <Grid container spacing={4} alignItems={"center"} alignContent={"center"}>
            <Grid item xs={6}>
                <Box sx={{display: "flex", textAlign: "center"}}>
                    <Stack sx={{width: "100%"}}>
                        <Typography fontSize={24} fontWeight={600}>
                            Website Overhauls
                        </Typography>
                        <Box sx={{display: "flex", backgroundColor: "green", borderRadius: "5px", padding: "5px"}}>
                            text/image/etc
                        </Box>
                    </Stack>
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box sx={{display: "flex", textAlign: "center"}}>
                    <Stack sx={{width: "100%"}}>
                        <Typography fontSize={24} fontWeight={600}>
                            Managed DNS
                        </Typography>
                        <Box sx={{display: "flex", backgroundColor: "green", borderRadius: "5px", padding: "5px"}}>
                            text/image/etc
                        </Box>
                    </Stack>
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box sx={{display: "flex", textAlign: "center"}}>
                    <Stack sx={{width: "100%"}}>
                        <Typography fontSize={24} fontWeight={600}>
                            M&A Integration
                        </Typography>
                        <Box sx={{display: "flex", backgroundColor: "green", borderRadius: "5px", padding: "5px"}}>
                            text/image/etc
                        </Box>
                    </Stack>
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box sx={{display: "flex", textAlign: "center"}}>
                    <Stack sx={{width: "100%"}}>
                        <Typography fontSize={24} fontWeight={600}>
                            Web Service Cost Optimization
                        </Typography>
                        <Box sx={{display: "flex", backgroundColor: "green", borderRadius: "5px", padding: "5px"}}>
                            text/image/etc
                        </Box>
                    </Stack>
                </Box>
            </Grid>
        </Grid>
    )
}