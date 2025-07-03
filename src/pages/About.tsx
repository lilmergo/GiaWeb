import { Box, Chip, Typography } from "@mui/material";
import P5Eyes from "../components/P5Eyes";
import P5EyesSmall from "../components/P5EyesSmall";
import { useState } from "react";
import { motion } from "framer-motion";

export default function About() {
    const [showPhone, setShowPhone] = useState(false);
    const [showEmail, setShowEmail] = useState(false);
    const [showLocation, setShowLocation] = useState(false);
    return (
        <Box sx={{
            px: {
                xs: '10px',
                sm: '18%',
                md: '23.5%'
            },
            minHeight: {
                sm: 'calc(100vh - 91px)',
                xs: 'calc(100vh - 70px)'
            },
            overflow: 'hidden',
            border: 1,
            borderTop: 0,
            paddingTop: '20px'
        }}>

            <h2>Hi, I'm Gia!</h2>

            <Typography sx={{ fontWeight: 400 }}>
                I'm a full-stack developer passionate about being involved in every phase of development from conception to deployment, creating intuitive and accessible end-products.
            </Typography>

            <Box sx={{
                paddingTop: '5px', paddingBottom: '10px', justifyContent: 'center', display: {
                    sm: 'flex',
                    xs: 'none'
                }
            }}>
                {/* Use key with unique identifier that changes with route */}
                <P5Eyes key={`p5-eyes-about-${window.location.pathname}`} />
            </Box>
            <Box sx={{
                paddingTop: '5px', paddingBottom: '10px', justifyContent: 'center', display: {
                    sm: 'none',
                    xs: 'flex'
                }
            }}>
                {/* Also add key to small eyes component */}
                <P5EyesSmall key={`p5-eyes-small-about-${window.location.pathname}`} />
            </Box>
            <Box>
                <Chip
                    component={motion.div}
                    label={
                        <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                            {showPhone ? "+1 (250) 899-3176" : "Phone"}
                        </motion.span>
                    }
                    variant={showPhone ? "outlined" : "filled"}
                    color="primary"
                    onClick={() => setShowPhone(true)}
                    sx={{
                        m: "5px"
                    }}
                />
                <Chip
                    component={motion.div}
                    label={
                        <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                            {showEmail ? "megan.nguyenn261@gmail.com" : "Email"}
                        </motion.span>
                    }
                    variant={showEmail ? "outlined" : "filled"}
                    color="primary"
                    onClick={() => setShowEmail(true)}
                    sx={{
                        m: "5px"
                    }}
                />
                <Chip
                    component={motion.div}
                    label={
                        <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                            {showLocation ? "Montreal, Quebec" : "Location"}
                        </motion.span>
                    }
                    variant={showLocation ? "outlined" : "filled"}
                    color="primary"
                    onClick={() => setShowLocation(true)}
                    sx={{
                        m: "5px"
                    }}
                />
            </Box>
        </Box>
    );
}
