import React from 'react';
import { Box, Typography, Grid, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <Box
            sx={{
                backgroundColor: '#D9D9D9',
                color: 'black',
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
                <Grid item xs={12} md={3}>
                    <Typography variant="h6">Contactez-nous</Typography>
                    <Typography variant="body2" sx={{ lineHeight: '2' }}>
                        Rue de la laine, Zone industrielle<br />
                        Bir El Kassâa 2013 - Ben Arous - Tunisie<br />
                        Tél. : +(216) 71 383 220 / 71 389 752<br />
                        Fax. : +(216) 71 382 296<br />
                        E-mail: <Link href="mailto:contact@mdo-sa.tn" sx={{ color: 'black' }}>contact@mdo-sa.tn</Link><br />
                        Site web: <Link href="http://www.mdo-sa.tn" target="_blank" sx={{ color: 'black' }}>www.mdo-sa.tn</Link>
                    </Typography>
                </Grid>

                {/* Navigation Links Section */}
                <Grid item xs={12} md={3}>
                    <Typography variant="h6">Pages</Typography>
                    <Typography variant="body2" sx={{ lineHeight: '2' }}>
                        <Link href="/" underline="none" color="black" sx={{ '&:hover': { textDecoration: 'underline' } }}>Accueil</Link><br />
                        <Link href="/produits" underline="none" color="black" sx={{ '&:hover': { textDecoration: 'underline' } }}>Produits</Link><br />
                        <Link href="/contact" underline="none" color="black" sx={{ '&:hover': { textDecoration: 'underline' } }}>Contact</Link>
                    </Typography>
                </Grid>

                {/* Social Media Section */}
                <Grid item xs={12} md={3}>
                    <Typography variant="h6">Suivez-nous</Typography>
                    <Box>
                        <IconButton href="https://www.facebook.com/mdotunisie" target="_blank" sx={{ color: 'black' }}>
                            <FacebookIcon />
                        </IconButton>
                        <IconButton href="https://www.youtube.com/@mdotunisie9683" target="_blank" sx={{ color: 'black' }}>
                            <YouTubeIcon />
                        </IconButton>
                        <IconButton href="https://www.instagram.com/mdo.tunisie/" target="_blank" sx={{ color: 'black' }}>
                            <InstagramIcon />
                        </IconButton>
                    </Box>
                </Grid>

                {/* Map Section */}
                <Grid item xs={12} md={3}>
                    <Typography variant="h6">Notre Localisation</Typography>
                    <Box sx={{ borderRadius: '5px', overflow: 'hidden', marginTop: '0.5rem' }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.185732660938!2d10.214478915485375!3d36.75370207996257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd34c49d8fddf9%3A0x4a99b2e8f4a3b5c4!2sBir%20El%20Kass%C3%A2a%2C%20Ben%20Arous%2C%20Tunisia!5e0!3m2!1sen!2sus!4v1699804811723!5m2!1sen!2sus"
                            width="100%"
                            height="200"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Maps Location"
                        />
                    </Box>
                </Grid>
            </Grid>

            {/* Copyright Section */}
            <Box textAlign="center">
                <Typography variant="body2">
                    © 2024 MDO. Tous droits réservés.
                </Typography>
            </Box>
        </Box>
    );
};

export default Footer;
