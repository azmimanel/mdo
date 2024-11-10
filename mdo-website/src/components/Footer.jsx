import React from 'react';
import { Box, Typography, Grid, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <Box
            sx={{
                backgroundColor: '#333', // Dark background
                color: '#f5f7f7', // Light text color for contrast
                padding: '2rem 1rem',
                marginTop: 'auto',
                position: 'relative',
                right: 0,
                bottom: 0,
                left: 0
            }}
        >
            <Grid container spacing={4} justifyContent="space-between">
                {/* Contact Section */}
                <Grid item xs={12} md={4}>
                    <Typography variant="h6">Contactez-nous</Typography>
                    <Typography variant="body2">
                        Rue de la laine, Zone industrielle<br />
                        Bir El Kassâa 2013 - Ben Arous - Tunisie<br />
                        Tél. : +(216) 71 383 220 / 71 389 752<br />
                        Fax. : +(216) 71 382 296<br />
                        E-mail: <Link href="mailto:contact@mdo-sa.tn" sx={{ color: '#f5f7f7' }}>contact@mdo-sa.tn</Link><br />
                        Site web: <Link href="http://www.mdo-sa.tn" target="_blank" sx={{ color: '#f5f7f7' }}>www.mdo-sa.tn</Link>
                    </Typography>
                </Grid>

                {/* Navigation Links Section */}
                <Grid item xs={12} md={4}>
                    <Typography variant="h6">Pages</Typography>
                    <Typography variant="body2">
                        <Link href="/" underline="none" color="#f5f7f7" sx={{ '&:hover': { textDecoration: 'underline' } }}>Accueil</Link><br />
                        <Link href="/produits" underline="none" color="#f5f7f7" sx={{ '&:hover': { textDecoration: 'underline' } }}>Produits</Link><br />
                        <Link href="/contact" underline="none" color="#f5f7f7" sx={{ '&:hover': { textDecoration: 'underline' } }}>Contact</Link>
                    </Typography>
                </Grid>

                {/* Social Media Section */}
                <Grid item xs={12} md={4}>
                    <Typography variant="h6">Suivez-nous</Typography>
                    <Box>
                        <IconButton href="https://www.facebook.com/mdotunisie" target="_blank" sx={{ color: '#f5f7f7' }}>
                            <FacebookIcon />
                        </IconButton>
                        <IconButton href="https://www.youtube.com/@mdotunisie9683" target="_blank" sx={{ color: '#f5f7f7' }}>
                            <YouTubeIcon />
                        </IconButton>
                        <IconButton href="https://www.instagram.com/mdo.tunisie/" target="_blank" sx={{ color: '#f5f7f7' }}>
                            <InstagramIcon />
                        </IconButton>
                    </Box>
                </Grid>
            </Grid>

            {/* Copyright Section */}
            <Box textAlign="center" marginTop="2rem">
                <Typography variant="body2">
                    © 2024 MDO. Tous droits réservés.
                </Typography>
            </Box>
        </Box>
    );
};

export default Footer;
