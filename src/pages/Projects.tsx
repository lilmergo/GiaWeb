import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid2, Typography } from "@mui/material";

const projects = [
    {
        title: 'CyclopediApp',
        description: 'Environmental reading/tracking PWA built with Angular',
        githubLink: 'https://github.com/lilmergo/CyclopediApp', 
    },
    {
        title: 'PawBook',
        description: 'Social media site for pets!',
        githubLink: 'https://github.com/lilmergo/PawBook', 
    },
    {
        title: 'Ruins of Tyrrazza',
        description: 'A medieval top-down adventure game',
        githubLink: 'https://github.com/ubco-video-game-development-club/ruins-of-tyrrazza', 
        behanceLink: 'https://www.behance.net/gallery/133952113/Art-for-Ruins-of-Tyrrazza',
    },
    {
        title: 'Whirlwind Smasher',
        description: 'A side scroller: feel Grog\'s fists!',
        githubLink: '#',
    }
];

export default function Projects() {
    return (
        <Box sx={{ px: {
            xs:'20px',
            sm: '7%',
            md:'15%'
        },
        minHeight: {
            sm:'calc(100vh - 91px)',
            xs:'calc(100vh - 70px)'
        },
        overflow: 'hidden',
        border:1,
        borderTop:0,
        py:'20px'}}>
            <h1 style={{ fontWeight: 'lighter', fontSize: '40px', paddingBottom:'22px' }}>Projects</h1>
            <Grid2 container spacing={2}>
                {projects.map((project, index) => (
                    <Grid2 key={index} size={{xs:12, sm:6}}>
                        <Card sx={{ w: 1 / 2, border: 1, boxShadow: 'none' }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {project.title}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary', minHeight:'40px', display:'flex', flexDirection:'column', justifyContent:'center' }}>
                                    {project.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" href={project.githubLink} rel="noopener noreferrer"
                                    target="_blank">
                                    GitHub
                                </Button>
                                {project.behanceLink ?
                                    <Button size="small" href={project.githubLink} rel="noopener noreferrer"
                                        target="_blank">
                                        Behance
                                    </Button> : ''}
                            </CardActions>
                        </Card>
                    </Grid2>
                ))}
            </Grid2>
        </Box>
    );
}