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
                <Box sx={{display: "flex", textAlign: "left"}}>
                    <Stack sx={{width: "100%"}}>
                        <Typography fontSize={24} fontWeight={600}>
                            Website Overhauls
                        </Typography>
                        <Box sx={{display: "flex", backgroundColor: "#eaeaea", borderRadius: "10px", padding: "15px"}}>
                            <Typography>
                                We revamp your online presence by tailoring your website and IT infrastructure to your business needs, ensuring smooth operations with our continuous support and maintenance.
                            </Typography>
                        </Box>
                    </Stack>
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box sx={{display: "flex", textAlign: "left"}}>
                    <Stack sx={{width: "100%"}}>
                        <Typography fontSize={24} fontWeight={600}>
                            Managed DNS
                        </Typography>
                        <Box sx={{display: "flex", backgroundColor: "#eaeaea", borderRadius: "10px", padding: "15px"}}>
                            <Typography>
                                We manage your DNS and ensure that your website is always available, and most importantly, when things go wrong, we are there to fix it.
                            </Typography>
                        </Box>
                    </Stack>
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box sx={{display: "flex", textAlign: "left"}}>
                    <Stack sx={{width: "100%"}}>
                        <Typography fontSize={24} fontWeight={600}>
                            M&A Integration
                        </Typography>
                        <Box sx={{display: "flex", backgroundColor: "#eaeaea", borderRadius: "10px", padding: "15px"}}>
                            <Typography>
                                Navigating mergers and acquisitions requires a meticulous, hands-on approach to integrate IT systems effectively. Our expertise ensures a smooth transition, allowing you to focus on the strategic aspects of your merger or acquisition.
                            </Typography>
                        </Box>
                    </Stack>
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box sx={{display: "flex"}}>
                    <Stack sx={{width: "100%"}}>
                        <Typography fontSize={24} fontWeight={600}>
                            Web Service Cost Optimization
                        </Typography>
                        <Box sx={{display: "flex", backgroundColor: "#eaeaea", borderRadius: "10px", padding: "15px"}}>
                            <Typography>
                                Through detailed audits of your web services, we identify cost-saving opportunities and provide actionable recommendations and strategies for optimization, aiming to enhance efficiency and reduce expenses.
                            </Typography>
                        </Box>
                    </Stack>
                </Box>
            </Grid>
        </Grid>
    )
}