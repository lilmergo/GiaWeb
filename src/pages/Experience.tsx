import { Box, Chip, Grid2 } from "@mui/material";
import P5Background from "../components/P5Experience";
const links0 = [
    'JavaScript',
    'Python',
    'React',
    'Node.js',
    'Multimodal Prompt Testing'
  ];
  const links1 = [
    'React',
    'Node.js',
    'PostgreSQL',
    'Payment Gateways',
    'Jest',
    'React Testing Library',
    'Cypress',
    'REST API'
  ];
  const links2 = [
    'AWS',
    'PHP',
    'WooCommerce',
    'LearnDash',
    'React',
    'SQL',
    'API Integration'
  ];
  
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
                    <h2>Full Stack AI Trainer</h2>
                    <p><b>Outlier & DataAnnotation</b> &ndash; Remote Part-Time QC</p>
                    <p>June 2024 &ndash; Present</p>
                    {links0.map((link, index) => (
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
                   <p> I evaluated AI-generated code across full-stack projects using technologies like React, Node.js, and Python. I tested the model’s ability to solve programming tasks, identified edge cases, and debugged output for accuracy and functionality. My feedback focused on improving code clarity, adherence to rubric standards, and overall reliability, contributing to the refinement of multimodal AI systems.</p>
                    <h2>Full Stack Developer</h2>
                    <p><b>Human&rsquo;s Hub</b> &ndash; Remote QC</p>
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
                   <p>At Human’s Hub, I engineered a full-stack media room reservation system featuring an interactive seat selection UI built with React, a Node.js backend with RESTful APIs, and a PostgreSQL database. I integrated Stripe and PayPal payment gateways using SDKs and webhooks to enable secure real-time transactions, and deployed the system on Heroku with HTTPS, environment variable management, and parameterized queries. I also developed an admin dashboard with JWT authentication, booking and refund management, and automated email notifications via Nodemailer. Testing was conducted across all layers using Jest, React Testing Library, Supertest, and Cypress.</p>
                    <h2>Web Developer</h2>
                    <p><b>The Royal Alberta College</b> &ndash; Remote AB</p>
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
                    <p>At The Royal Alberta College, I developed and maintained two high-traffic e-learning platforms using WordPress, WooCommerce, and LearnDash, supporting over 12,000 student enrollments. I integrated AWS Lambda to automate partner course registration and data syncing, improving registration rates by 40%. I architected scalable AWS infrastructure using EC2, S3, CloudFront, IAM, and Secrets Manager to optimize performance and reliability. Additionally, I built a custom React-based LearnDash dashboard for course tracking and reporting, integrated directly into the WordPress admin via enqueued scripts and optimized SQL queries.</p>
                </Box>
            </Grid2>
        </Grid2>
    );

}