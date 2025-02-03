import {  Box, Chip} from "@mui/material";
import P5Eyes from "../components/P5Eyes";

export default function About() {
    return (
        <Box sx={{
            px: {
                xs:'10px',
                sm: '18%',
                md:'23.5%'
            },
            minHeight: {
                sm:'calc(100vh - 91px)',
                xs:'calc(100vh - 70px)'
            },
            overflow: 'hidden',
            border:1,
            borderTop:0,
            paddingTop:'20px'
        }}>

            <h2>Hi, I'm Gia!</h2>
            
            <p>I'm a full-stack developer passionate about being involved in every phase of development from conception to deployment, creating intuitive and accessible end-products.</p> 
            
            <Box sx={{ paddingTop: '5px', paddingBottom:'10px', display:'flex', justifyContent:'center' }}><P5Eyes /></Box>
            <Box>
                <Chip
                    label='+1 (250) 899-3176'
                    variant='outlined'
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
                 <Chip
                    label='megan.nguyenn261@gmail.com'
                    variant='outlined'
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
                 <Chip
                    label='Montreal, Quebec'
                    variant='outlined'
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
            </Box>
        </Box>
    );
}