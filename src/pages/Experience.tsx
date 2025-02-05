import { Box, Chip, Grid2 } from "@mui/material";
import P5Background from "../components/P5Experience";
const links1 = ['React', 'JavaScript', 'Node.js', 'Postgres', 'Heroku', 'REST API', 'Tailwind CSS'];
const links2 = ['PHP', 'AWS', 'SQL', 'JavaScript', 'WordPress', 'REST API'];
export default function Experience() {
    return (
        <Grid2 container spacing={'20px'} sx={{ border: 1, borderTop: 0, height:{xs:'calc(100vh - 39.5px)', sm:'calc(100vh - 91px)'} }} overflow={'hidden'}  >
            <Grid2 size={3} >
                <P5Background />
            </Grid2>
            <Grid2 size={9} sx={{
                border:1,
                borderTop:0,
                height: '100vh',
                overflowY: 'auto',
                overflowX: 'hidden',
            }}>
                <Box sx={{ textAlign: 'left', px:{
                    xs:'15px',
                    sm:'50px'
                }, paddingBottom:'120px' }}>
                    <h2>Full Stack Developer</h2>
                    <p>Human&rsquo;s Hub &ndash; Remote QC</p>
                    <p>June 2024 &ndash; December 2024</p>
                    {links1.map((link, index) => (
                            <Chip
                                key={index}
                                label={link}
                                component="a"
                                rel="noopener noreferrer" 
                                target="_blank"
                                variant='filled'
                                color='primary'
                                sx={{
                                    mx: '5px', marginBottom: '5px','&:hover': {
                                        border: '1px solid',
                                        borderColor: 'primary.main', 
                                        backgroundColor: 'transparent', 
                                        color: 'primary.main', 
                                        
                                    },
                                }}
                            />
                        ))}
                   <p>Developed a media room reservation system with React and react-seat-picker for interactive booking. Integrated Node.js APIs for seat availability, payment processing (PayPal, Stripe), and workflow automation, eliminating manual errors. Configured a PostgreSQL database, deployed on Heroku, and built an admin dashboard for managing payments, refunds, and notifications. Designed a WCAG-compliant responsive UI with Tailwind CSS.</p>
                    <h2>Web Developer</h2>
                    <p>The Royal Alberta College &ndash; Remote AB</p>
                    <p>June 2024 &ndash; December 2024</p>
                    {links2.map((link, index) => (
                            <Chip
                                key={index}
                                label={link}
                                component="a"
                                rel="noopener noreferrer" 
                                target="_blank"
                                variant='filled'
                                color='primary'
                                sx={{
                                    mx: '5px', marginBottom: '5px', '&:hover': {
                                        border: '1px solid', 
                                        borderColor: 'primary.main', 
                                        backgroundColor: 'transparent', 
                                        color: 'primary.main', 
                                    },
                                }}
                            />
                        ))}
                    <p>Built and maintained two e-learning platforms, integrating WooCommerce & LearnDash to support 40+ courses and 12,000+ enrollments. Optimized AWS architecture with load balancing and auto-scaling for high traffic. Developed a LearnDash management dashboard for enrollment tracking, course completion monitoring, and automated certification. Streamlined cross-platform student registration via API integrations using JavaScript, AWS Lambda, and Google Apps Script, reducing manual workload and improving efficiency.</p>
                </Box>
            </Grid2>
        </Grid2>
    );

}