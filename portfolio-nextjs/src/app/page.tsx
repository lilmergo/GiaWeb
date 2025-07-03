"use client";
import { Box, Chip, Grid2, Typography } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import P5Sketch from "../components/P5Sketch";
const links = [
    { label: "Resume", href: "/GiaWeb/Gia_Nguyen_Resume.pdf" },
    { label: "GitHub", href: "https://github.com/lilmergo/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/gia-hanh-n-446337204/" },
];
export default function Home() {
    return (
        <Grid2 container spacing={{xs:0,sm:'20px'}} maxHeight={'100vh'} overflow={'hidden'}>
            <Grid2 size={{ xs: 12, sm: 7 }} sx={{ textAlign: 'left' }}>
                <Box sx={{ border: 1, borderTop: 0, px: '50px', height: {xs:'calc(50vh - 30px)', sm:'calc(100vh - 91px)'}, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Box>
                        {links.map((link, index) => (
                            <Chip
                                key={index} 
                                label={link.label}
                                component="a"
                                href={link.href}
                                rel="noopener noreferrer"
                                target="_blank"
                                clickable
                                variant='filled'
                                color='primary'
                                sx={{
                                    m: '5px', '&:hover': {
                                        border: '1px solid', 
                                        borderColor: 'primary.main',
                                        backgroundColor: 'transparent', 
                                        color: 'primary.main', 
                                    },
                                }}
                            />
                        ))}
                    </Box>

                    <Typography variant="h1" component="h2"
                        sx={{
                            fontWeight: '100',
                            my: '30px'
                        }}>
                        Gia Hanh Nguyen
                    </Typography>
                    <TypeAnimation
                        sequence={[
                            'Full Stack Developer',
                            1000,
                            'AWS Architect',
                            1000,
                            'React Enthusiast',
                            1000
                        ]}
                        speed={50}
                        style={{ fontSize: '1.5em', color: '#000000', fontWeight: '100' }}
                        repeat={Infinity}
                    />
                </Box>
            </Grid2>

            <Grid2 size={{ xs: 12, sm: 5 }} >
                <Box sx={{ border: 1, borderTop: 0, height:{xs:'calc(50vh - 39.5px)', sm:'calc(100vh - 91px)'}, alignItems:'center' }} overflow={'hidden'} >
                    <P5Sketch />

                </Box>

            </Grid2>

        </Grid2>

    );

}