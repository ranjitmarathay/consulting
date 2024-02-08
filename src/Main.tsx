import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Box } from "@mui/material";
import Home from "./pages/Home.tsx";
import Contact from "./pages/Contact.tsx";
import About from "./pages/About.tsx";
import Services from "./pages/Services.tsx";
import Header from "./components/Header.tsx";


export default function Main(){
    return (
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            {/* <Box sx={{flex: "1", overflow: "auto"}}> */}
                <Box
                    sx={{
                        width: { xs: "100%", sm: "90%", md: "80%", lg: "70%" }, // Responsive width
                        mx: "auto",
                        paddingTop: "25px"
                    }}
                >
                    <BrowserRouter>
                        <Header/>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/services" element={<Services />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/contact" element={<Contact />} />
                        </Routes>
                    </BrowserRouter>
                </Box>
            {/* </Box> */}
        </div>

    )
}

