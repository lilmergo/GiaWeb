import { Box, Button, Card, CardActions, CardContent, Grid2, Typography } from "@mui/material";

const projects = [
    {
        title: 'Tcolon3',
        description: 'A web-based AI chat application featuring multi-LLM support, reasoning mode, user authentication, chat history sync, and more.',
        githubLink: 'https://github.com/lilmergo/tcolon3-ai-chat',
        liveLink: 'https://tcolon3.vercel.app/',
    },
    {
        title: 'CyclopediApp',
        description: 'Environmental reading/tracking PWA built with Angular, Ionic, Node.js, Firebase, and Android Studio.',
        githubLink: 'https://github.com/lilmergo/CyclopediApp',
        liveLink: 'https://cyclopediapp.firebaseapp.com/',
    },
    {
        title: 'Ruins of Tyrrazza',
        description: 'A medieval top-down adventure game where you must vanquish an ancient evil deep in the ruins of a lost city. Built with Unity and C#.',
        githubLink: 'https://github.com/ubco-video-game-development-club/ruins-of-tyrrazza',
        behanceLink: 'https://www.behance.net/gallery/133952113/Art-for-Ruins-of-Tyrrazza',
    },
    {
        title: 'Whirlwind Smasher',
        description: 'A side scroller: feel Grog\'s fists! Winner of BC Hacks 2021. Built with Unity and C#.',
        githubLink: 'https://github.com/JadenBalogh/whirlwind-smasher',
    }
];

export default function Projects() {
    return (
        <Box sx={{
            px: {
                xs: '20px',
                sm: '7%',
                md: '15%'
            },
            minHeight: {
                sm: 'calc(100vh - 91px)',
                xs: 'calc(100vh - 70px)'
            },
            maxHeight: 'calc(100vh - 91px)',
            overflowY: 'auto',
            overflowX: 'hidden',
            border: 1,
            borderTop: 0,
            py: '20px'
        }}>
            <h1 style={{ fontWeight: '400', fontSize: '40px', paddingBottom: '22px' }}>Projects</h1>
            <Grid2 container spacing={2}>
                {projects.map((project, index) => (
                    <Grid2 key={index} size={{ xs: 12, sm: 6 }}>
                        <Card
                            sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                border: 1,
                                boxShadow: 'none'
                            }}
                        >
                            <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <Typography gutterBottom variant="h5" component="div">
                                    {project.title}
                                </Typography>
                                <Box
                                    sx={{
                                        flex: 1,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: 'text.secondary',
                                            textAlign: 'center',
                                            fontWeight: '300'
                                        }}
                                    >
                                        {project.description}
                                    </Typography>
                                </Box>
                            </CardContent>
                            <CardActions>
                                <Button size="small" href={project.githubLink} rel="noopener noreferrer" target="_blank">
                                    GitHub
                                </Button>
                                {project.behanceLink ? (
                                    <Button size="small" href={project.behanceLink} rel="noopener noreferrer" target="_blank">
                                        Behance
                                    </Button>
                                ) : null}
                                {project.liveLink ? (
                                    <Button size="small" href={project.liveLink} rel="noopener noreferrer" target="_blank">
                                        Live
                                    </Button>
                                ) : null}
                            </CardActions>
                        </Card>
                    </Grid2>
                ))}
            </Grid2>
        </Box>
    );
}