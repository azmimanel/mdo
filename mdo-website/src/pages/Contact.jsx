import React, { useState } from "react";
import { Box, TextField, Button, Typography } from '@mui/material';
import contactImage from '../Assets/img_0752.jpg';

const Contact = () => {
    const [formData, setFormData] = useState({
        subject: '',
        phone: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, such as sending the form data to an API
        console.log(formData);
    };

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' }, // Column on mobile, row on desktop
                    alignItems: 'center',
                    justifyContent: 'center',
                    mt: 4,
                    p: 3,
                    gap: 4, // Adds spacing between the image and the form
                }}
            >
                {/* Image Section */}
                <Box
                    sx={{
                        width: { xs: '100%', md: '45%' }, // Full width on mobile, 45% on desktop
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <img
                        src={contactImage}
                        alt="Contact Us"
                        style={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: '8px',
                        }}
                    />
                </Box>

                {/* Form Section */}
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: { xs: '100%', md: '50%' }, // Full width on mobile, 50% on desktop
                        gap: 2
                    }}
                >
                    <Typography variant="h4" gutterBottom >
                        Contactez-nous
                    </Typography>
                    <TextField
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        fullWidth
                        required
                    />
                    <TextField
                        label="Phone Number"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        fullWidth
                        required
                        inputProps={{ pattern: "[0-9]{8}" }} // Validates 10-15 digit phone numbers
                    />
                    <TextField
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        fullWidth
                        required
                    />
                    <TextField
                        label="Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        fullWidth
                        multiline
                        rows={4}
                        required
                    />
                    <Button type="submit" variant="contained" color="primary"
                        sx={{
                            mt: 2,
                            width: 'fit-content',
                            alignSelf: 'flex-end',
                            backgroundColor: '#a7a7a7 !important',
                            color: 'white !important',
                            boxShadow: 'none',
                        }}>
                        Submit
                    </Button>
                </Box>
            </Box>
        </>
    );
};

export default Contact;
