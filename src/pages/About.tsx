import React from 'react';
import {
    Box,
    Typography,
    Grid,
    Stack,
} from "@mui/material";

import picture from "../images/picture.jpeg";

export default function About(){
    return (
        <Box sx={{ width: '100%', pt: '40px' }}>
            <Typography sx={{ fontSize: 34, fontWeight: 800, textAlign: 'center', mb: 4 }}>
                About
            </Typography>
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12} md={6} lg={4}>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <img src={picture} alt="Your Name" style={{ width: '100%', height: 'auto', borderRadius: '50%' }} />
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: "20px" }}>
                        <Typography variant="body1" sx={{ fontWeight: 700 }}>
                            Ranjit Marathay
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <Stack spacing={2}>
                        <Typography variant="h5" sx={{ fontWeight: 700 }}>
                            Who I Am
                        </Typography>
                        <Typography variant="body1">
                            {/* Ranjit is a software engineer whose passion for technology and business optimization has propelled his career across diverse industries. After earning a degree in Computer Science from Rensselaer Polytechnic Institute, Ranjit embarked on a professional journey that saw him excel in multiple specialized roles. He first sharpened his technical prowess at a leading data analytics startup, where he leveraged big data to drive decision-making processes. Following this, he transitioned to a cybersecurity firm, dedicating himself to safeguarding digital assets and enhancing system integrity. Ranjit's quest for new challenges then led him to a property management startup, where he innovated solutions to streamline operations and improve customer experiences. Armed with this rich tapestry of experiences, Ranjit founded his consulting practice, aiming to fuse technology with strategic business insights to elevate organizations' operational efficiency and growth. */}
                            Ranjit, a software engineer with a Computer Science degree from Rensselaer Polytechnic Institute, has excelled across various sectors. His career journey took him from a data analytics startup, enhancing decision-making with big data, to a cybersecurity firm focused on protecting digital assets, and finally to a property management startup, where he streamlined operations and boosted customer experiences. Leveraging these diverse experiences, Ranjit founded his consulting practice to merge technology with strategic insights, boosting organizational efficiency and growth.
                        </Typography>
                        <Typography variant="h5" sx={{ fontWeight: 700 }}>
                            Unique Skills
                        </Typography>
                        <Typography variant="body1">
                            Product Development, Monetization Strategy, Business Process Optimization, IT System Overhaul, Business Expansion, M&A Integration, Managed DNS, Website Overhauls, Web Service Cost Optimization
                        </Typography>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    )
}