import React from 'react';

import { 
    Box,
    Button,
    Typography,
    Toolbar,
    Grid,
    AppBar,
    Link,
} from "@mui/material";

import SmartphoneIcon from '@mui/icons-material/Smartphone';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';

const TextMeButton = () => {

    const phoneNumber = "+14084761238";
    const email = "rmarathay+consulting@gmail.com"
    const emailMessage = "Hello, I would like to chat about a custom data solution!\n\nMy name is:\n\nThe name of my business is:\n\nMy website is:\n\nThe problem I am facing is:\n\n Thanks!\n <Your Name>"
    const textMessage = "Hi,%I%would%like%to%chat%about%a%custom%data%solution!"

    const handleClick = () => {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            // Mobile device detected
            window.open(`sms:${phoneNumber}?body=${encodeURIComponent(textMessage)}`);
        } else {
            // Non-mobile device, prompt to manually send a message
            window.open(`mailto:${email}?body=${encodeURIComponent(emailMessage)}`)
        }
    }

    const detectDevice = () => {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            // Mobile device detected
            return "Text";
        } else {
            // Non-mobile device, prompt to manually send a message
            return "Email";
        }
    }


    return (
        <Button
            variant="contained"
            sx={{
                backgroundColor: "#FFD700",
                color: "black",
                href: "sms:+1234567890?body=Hello, I would like to chat!",
                borderRadius: "10px",
                padding: "10px",
                fontSize: "20px",
                fontWeight: 600,
                width: "70%",
                '&:hover': {
                    backgroundColor: "#FFD700",
                    color: "black",
                },
            }}
            onClick={() => handleClick()}
        >
            {detectDevice()} Ranjit to Learn More 
        </Button>
    )
}

export default function LandingPage(){

    const paddingLeftVar = "10px"

    return (
        <Box
            sx={{
                width: { xs: "100%", sm: "90%", md: "80%", lg: "70%" }, // Responsive width
                mx: "auto",
                paddingTop: "25px"
            }}
        >
            <AppBar position="static" sx={{ bgcolor: 'white', boxShadow: '0 4px 2px -2px gray', borderColor: "#000000" }}>
                <Toolbar>
                    <Typography fontSize={34} sx={{ flexGrow: 1 }} fontWeight={800} color={"#000000"}>
                        Ranjit Marathay
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <Link href="tel:+14084761238" color="inherit" sx={{ marginX: 1, display: 'flex', alignItems: 'center' }}>
                            <SmartphoneIcon sx={{ mr: 0.5, color: "#000000" }} />s
                        </Link>
                        <Link href="mailto:rmarathay+consulting@gmail.com" color="inherit" sx={{ marginX: 1, display: 'flex', alignItems: 'center' }}>
                            <EmailIcon sx={{ mr: 0.5, color: "#000000"}} />
                        </Link>
                        <Link href="https://ranjitmarathay.com" color="inherit" sx={{ marginX: 1, display: 'flex', alignItems: 'center' }}>
                            <LanguageIcon sx={{ mr: 0.5, color: "#000000" }} />
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>            
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
                            Boost Your Profit Margins with Tailored Data Solutions
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                {/* sm={6} md={4} lg={3}> */}
                    <Typography fontSize={28} fontWeight={600}>
                        Burdened by Manual Processes?
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
                                These tasks take up <u><b>time</b></u> and <u><b>money</b></u>. 
                            </Typography>
                            <Typography fontSize={20} fontWeight={400}>
                                <li>
                                    Is copy & paste a major part of your business workflow?
                                </li>
                                <li>
                                    Do you train new employees to do manual tasks?
                                </li>
                            </Typography>
                        </Box>
                        <Typography fontSize={20} fontWeight={400}>
                            <b>These tasks distract you from increasing your client base and improving your offering.</b>
                        </Typography>

                        <Typography fontSize={20} fontWeight={400}>
                            Click here to set up a call and discover the cost savings I can provide you
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <TextMeButton/>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                {/* sm={6} md={4} lg={3}> */}
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
                                Recently acquired an organization and need help implementing systems?
                            </Typography>
                        </Box>
                        <Typography fontSize={20} fontWeight={400}>
                            There are so many moving parts in an acquisition of a new organization, don’t let your acquired customers slip through the cracks.
                        </Typography>
                        <Typography fontSize={20} fontWeight={400}>
                            Integrating different IT systems takes time away from maintaining the business and servicing existing clients.
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <TextMeButton/>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                {/* sm={6} md={4} lg={3}> */}
                    <Typography fontSize={28} fontWeight={600}>
                        Relying on Spreadsheets?
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
                                Does your business primarily run off a spreadsheet?
                            </Typography>
                            <Typography fontSize={20} fontWeight={400}>
                                As your business grows, you'll need tailored solutions to efficiently onboard customers, manage customer data, create effective feedback loops, and train employees.
                            </Typography>
                            <Typography fontSize={20} fontWeight={400}>
                                Don’t let these challenges slow you down. 
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
                        <TextMeButton/>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                {/* sm={6} md={4} lg={3}> */}
                    <Typography fontSize={28} fontWeight={600}>
                        Worried about the cost of professional IT or software engineering services?
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
                                Solutions are available at all price points.
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
                        <TextMeButton/>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}