import { Box, Chip, Grid2 } from "@mui/material";
import P5Background from "../components/P5Experience";
const links1 = ['React', 'JavaScript', 'Node.js', 'Postgres', 'Heroku', 'REST API', 'Tailwind CSS'];
const links2 = ['PHP', 'AWS', 'SQL', 'JavaScript', 'WordPress', 'REST API'];
export default function Experience() {
    return (
        <Grid2 container spacing={'20px'} sx={{ border: 1, borderTop: 0, height:{xs:'calc(100vh - 39.5px)', sm:'calc(100vh - 91px)'} }} overflow={'hidden'}  >
            <Grid2 size={2} >
                <P5Background />
            </Grid2>
            <Grid2 size={10} sx={{
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
                                    mx: '5px', '&:hover': {
                                        border: '1px solid',
                                        borderColor: 'primary.main', 
                                        backgroundColor: 'transparent', 
                                        color: 'primary.main', 
                                    },
                                }}
                            />
                        ))}
                    <ul>
                        <li>Contracted to develop a media room reservation system to improve booking processes. Designed and developed the system using React and react-seat-picker for interactive seat selection, integrating Node.js for API endpoints to manage seat availability, booking workflows, and payment processing. Eliminated manual booking errors and streamlined administrative operations</li>
                        <li>Configured a PostgreSQL database and deployed the application on Heroku, ensuring efficient and reliable data storage and retrieval for the system</li>
                        <li>Integrated PayPal and Stripe for payment handling, configuring gateways to support credit card transactions. Delivered a secure and efficient booking and payment system</li>
                        <li>Developed an admin dashboard to manage payment processing, incorporating functionalities to process refunds, manage bookings, and automate email notifications. Optimized administrative tasks and improved operational efficiency</li>
                        <li>Designed a responsive frontend using Tailwind CSS while adhering to Web Content Accessibility Guidelines (WCAG), delivering an inclusive and adaptive interface optimized for all user viewports</li>
                    </ul>
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
                                    mx: '5px', '&:hover': {
                                        border: '1px solid', 
                                        borderColor: 'primary.main', 
                                        backgroundColor: 'transparent', 
                                        color: 'primary.main', 
                                    },
                                }}
                            />
                        ))}
                    <ul>
                        <li>Developed and maintained two e-learning platforms, integrating WooCommerce and LearnDash to support over 40 courses and drive 12,000+ student enrollments</li>
                        <li>Optimized AWS architecture with load balancing and auto-scaling to handle high traffic. Directed site migrations achieving seamless transitions with minimal downtime</li>
                        <li>Built a LearnDash management dashboard to track enrollments, monitor completions, and generate downloadable course certificates and reports. Integrated WordPress API for authentication and implemented SQL queries for efficient data retrieval</li>
                        <li>Streamlined cross-platform student registration, enrollment, and certification for partner sites through external API integrations using JavaScript, AWS Lambda, and Google Apps Script. Automated processes significantly minimized manual administrative effort, improving efficiency and accuracy</li>
                    </ul>
                </Box>
            </Grid2>
        </Grid2>
    );

}