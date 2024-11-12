import React, { useState } from "react";
import { Box, TextField, Button, Typography, Alert, CircularProgress } from '@mui/material';
import contactImage from '../Assets/img_0752.jpg';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({
        email_object: '',
        contact_number: '',
        from_name: '',
        message: ''
    });
    const [success, setSuccess] = useState(false);
    const [failed, setFailed] = useState(false);
    const [loading, setLoading] = useState(false);
    const isFormIncomplete = Object.values(formData).some(value => value === '');

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        const template_params = {
            from_name: formData.from_name,
            from_email: formData.from_name,
            email_object: formData.email_object,
            contact_number: formData.contact_number,
            message: formData.message,
            to_name: 'MDO'
        }

        emailjs
            .send(
                'service_27cxpuv',
                'template_r1fq9n9',
                template_params,
                'e18rQV3RTTTDEjyTN'
            )
            .then(
                () => {
                    console.log('SUCCESS!');
                    setSuccess(true);
                    setLoading(false);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setFailed(true);
                    setLoading(false);
                },
            );
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <>
            {loading &&
                <Box
                    sx={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgba(128, 128, 128, 0.5)',
                        zIndex: 1300,
                    }}
                >
                    <CircularProgress />
                </Box>
            }
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: 'center',
                    justifyContent: 'center',
                    mt: 4,
                    p: 3,
                    gap: 4,
                }}
            >
                {/* Image Section */}
                <Box
                    sx={{
                        width: { xs: '100%', md: '45%' },
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
                    onSubmit={sendEmail}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: { xs: '100%', md: '50%' },
                        gap: 2
                    }}
                >
                    <Typography variant="h4" gutterBottom >
                        Contactez-nous
                    </Typography>
                    <TextField
                        label="Subject"
                        name="email_object"
                        value={formData.email_object}
                        onChange={handleChange}
                        fullWidth
                        required
                    />
                    <TextField
                        label="Phone Number"
                        name="contact_number"
                        type="tel"
                        value={formData.contact_number}
                        onChange={handleChange}
                        fullWidth
                        required
                        inputProps={{ pattern: "[0-9]{8}" }}
                    />
                    <TextField
                        label="Email"
                        name="from_name"
                        type="email"
                        value={formData.from_name}
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
                    <div
                        style={{ display: 'flex', justifyContent: 'space-between' }}
                    >
                        {success && <Alert variant="filled" severity="success">
                            Email sent successfully.
                        </Alert>
                        }
                        {failed && <Alert variant="filled" severity="error">
                            Email wasn't sent, please try again later.
                        </Alert>
                        }
                        <Button type="submit" variant="contained" color="primary"
                            sx={{
                                mt: 2,
                                width: 'fit-content',
                                alignSelf: 'flex-end',
                                backgroundColor: '#77451b !important',
                                color: 'white !important',
                                boxShadow: 'none',
                                "&.Mui-disabled": {
                                    opacity: '0.7'
                                }
                            }}
                            disabled={isFormIncomplete}
                        >
                            Submit
                        </Button>
                    </div>
                </Box>
            </Box>
        </>
    );
};

export default Contact;
