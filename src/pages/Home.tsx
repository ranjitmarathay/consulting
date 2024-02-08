import React from 'react';
import { useNavigate } from "react-router-dom";
import { 
    Box,
    Typography,
    Grid,
} from "@mui/material";
import {LearnMoreButton, CustomButton} from '../components/Buttons.tsx';

export default function Home(){
    const paddingLeftVar = "10px"

    return (            
            <Grid 
                container
                spacing={2}
                justifyContent="center"
                alignItems="center"
                sx={{
                    padding: "20px",
                    paddingTop: "30px"
                }}
            >
                <Grid item xs={12}>
                    <Box
                        sx={{
                            textAlign: "center",
                            paddingBottom: "20px"
                        }}
                    >
                        <Typography fontSize={34} fontWeight={800}>
                            Managed IT Services
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                {/* sm={6} md={4} lg={3}> */}
                    <Typography fontSize={28} fontWeight={600}>
                        Do you need help overhauling your existing website?
                    </Typography>
                    <Box sx={{paddingLeft: paddingLeftVar, paddingBottom: "0px"}}>
                        <Box
                            sx={{
                                textAlign: "left",
                                paddingTop: "10px",
                                paddingBottom: "15px"
                            }}
                        >
                            <Typography fontSize={20} fontWeight={400}>
                                A website is the first impression your customers have of your business. 
                                Simply put: If you have an outdated website, you are losing customers.
                            </Typography>
                            <Typography fontSize={20} fontWeight={400}>
                                <ol>
                                    <li>
                                        We gather your requirements to make your business process more efficient.
                                    </li>
                                    <li>
                                        We tailor a solution to accelerate your business operations.
                                    </li>
                                    <li>
                                        We build your website and software systems while scaling your IT infrastructure.
                                    </li>
                                    <li>
                                        We provide ongoing support and maintenance.
                                    </li>
                                </ol>
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <LearnMoreButton navigateTo="/services"/>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Typography fontSize={28} fontWeight={600}>
                        Do words like "CNAME", "SSL" and "DNS" make your head spin?
                    </Typography>
                    <Box sx={{paddingLeft: paddingLeftVar, paddingBottom: "25px"}}>
                        <Box
                            sx={{
                                textAlign: "left",
                                paddingTop: "10px",
                                paddingBottom: "15px"
                            }}
                        >
                            <Typography fontSize={20} fontWeight={400}>
                                Don't spend time learning about this, instead focus on growing your business.
                                We can help you navigate any technical challenge you have with our managed IT services.
                            </Typography>
                            <Typography fontSize={20} fontWeight={400}>
                                <b>Getting this wrong could mean the following</b>
                                <ul>
                                    <li>
                                        Your website goes down
                                    </li>
                                    <li>
                                        Your customers can't find you
                                    </li>
                                    <li>
                                        Your customers can't buy from you
                                    </li>
                                </ul>
                                <b>Bottom line: You lose money.</b>
                            </Typography>
                            <Typography fontSize={20} fontWeight={400}>
                                Don’t let these challenges slow you down. Off load this to us and focus on growing your business.
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <LearnMoreButton navigateTo="/services"/>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Typography fontSize={28} fontWeight={600}>
                        Navigating a New Acquisition?
                    </Typography>
                    <Box sx={{paddingLeft: paddingLeftVar, paddingBottom: "25px"}}>
                        <Box
                            sx={{
                                textAlign: "left",
                                paddingTop: "10px",
                                paddingBottom: "15px"
                            }}
                        >
                            <Typography fontSize={20} fontWeight={400}>
                                Have you recently acquired an organization and need help implementing systems?
                            </Typography>
                        </Box>
                        <Typography fontSize={20} fontWeight={400}>
                            This is an exciting time for your business, and IT infrastructure and software systems is a critical part of the integration.
                        </Typography>
                        <Typography fontSize={20} fontWeight={400}>
                            <b>We handle the details, you reap the rewards.</b>
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <CustomButton message={"Contact Us"} navigateTo="/contact"/>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Typography fontSize={28} fontWeight={600}>
                        Are Your Cloud Services Costing You Too Much?
                    </Typography>
                    <Box sx={{paddingLeft: paddingLeftVar, paddingBottom: "25px"}}>
                        <Box
                            sx={{
                                textAlign: "left",
                                paddingTop: "10px",
                                paddingBottom: "15px"
                            }}
                        >
                            <Typography fontSize={20} fontWeight={400}>
                                With the ever-growing complexity of cloud services, it's easy for costs to spiral out of control. But what if you could streamline your expenses without compromising on efficiency?                             
                            </Typography>
                        </Box>
                        <Typography fontSize={20} fontWeight={400}>
                            Our expert team specializes in identifying and eliminating the hidden, unnecessary costs lurking within your cloud services, apps, and subscriptions. By optimizing your cloud spend, we not only reduce the cost to run your business but also unlock potential savings that boost your bottom line. 
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <CustomButton message={"Contact Us"} navigateTo="/contact"/>
                    </Box>
                </Grid>
            </Grid>
    )
}