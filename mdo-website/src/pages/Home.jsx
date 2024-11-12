import React from "react";
import style from "./pages.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from "../Assets/Highcross_Leicester_logo.jpeg"
import slider2 from "../Assets/northPark.jpg";
import slider3 from "../Assets/log_new.png";
import slider4 from "../Assets/osaka-university-iscn-international-sustainable-campus-network-member.png";
import slider5 from "../Assets/astor_epigrafe.webp";
import slider6 from "../Assets/glendale-plaza-apartments-logo.png";
import presentationImage from "../Assets/presentation.jpg";
import usineImage from "../Assets/2.jpg"
import slider_home_one from "../Assets/HomePage/slider_one.png";
import slider_home_two from "../Assets/HomePage/slider_two.jpg";
import slider_home_three from "../Assets/img_0591.jpg";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import "../App.css";

const HomePage = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    const settings_home_presentation = {
        dots: false,
        infinite: true,
        speed: 3000,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const pictures = [slider_home_one, slider_home_two, slider_home_three];

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/produits');
    };


    return (
        <div className={style.container}>
            <div style={{ position: 'relative', top: '-80px' }}>
                <Slider arrows={false} {...settings_home_presentation}>
                    <div style={{ position: 'relative' }}>
                        <img
                            src={pictures[0]}
                            alt="sliderReferenceOne"
                            style={{
                                width: '100%',
                                height: '100vh',
                                objectFit: 'cover'
                            }}
                        />
                    </div>
                    <div style={{ position: 'relative' }}>
                        <img
                            src={pictures[1]}
                            alt="sliderReferenceTwo"
                            style={{
                                width: '100%',
                                height: '100vh',
                                objectFit: 'cover'
                            }}
                        />
                    </div>
                </Slider>

                {/* Overlay text */}
                <div
                    className={style.responsiveText}
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: 'white',
                        textAlign: 'center',
                        backfaceVisibility: 'hidden',
                        perspective: '1000px',
                    }}>
                    <div
                        style={{
                            display: 'inline-block',
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                            animation: 'showup 7s infinite'
                        }}
                    >Notre métier est un vrai art!</div>
                    <div
                        style={{
                            display: 'inline-block',
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                            width: '0px',
                            animation: 'reveal 7s infinite'
                        }}
                    >
                        <h2
                            style={{
                                margin: '0px',
                                animation: 'slidein 7s infinite'
                            }}
                        > C’est aussi une passion.</h2>
                    </div>

                </div>
            </div>
            <div className={style.bannerHome}>
                <h3>
                    Chez MDO, l’art du marbre et des pierres naturelles est une passion qui se transforme en excellence.
                    Grâce à notre savoir-faire et à des technologies de pointe, nous façonnons des chefs-d'œuvre qui traversent le temps.
                </h3>
            </div>
            <div className={style.homeContainerMiddle}>
                <img src={presentationImage} alt="presentationImage" />
                <p className={style.text}>MDO, fort d'une expérience depuis 1985,
                    revient en force sur le marché du marbre et des pierres naturelles avec le lancement de
                    Marbre Design & Objets et sa nouvelle usine à Bir El Kassâa, équipée des dernières technologies.
                    Offrant des services haut de gamme plus rapidement que ses concurrents, MDO se distingue par son
                    expertise et sa passion, depuis le sciage jusqu'à la création de produits finis. Les meilleurs blocs
                    de pierre sont soigneusement sélectionnés des carrières de Thala, Foussana, et à l'international,
                    pour répondre aux normes exigeantes de ses clients.</p>
            </div>
            <div className={style.homeContainerMiddle}>
                <div>
                    <p className={style.text}>
                        Les blocs, extraits de nos carrières de Thala (Thala Beige et Thala Gris) et de Foussana (Gris Foussana),
                        passent par plusieurs étapes en usine : réception, préparation,
                        sciage, débitage, traitements de surface, et travaux artistiques et finitions avec CNC pour un résultat de haute qualité.</p>
                    <button className={style.button} onClick={handleNavigate}>
                        Explorer nos produits
                    </button>
                </div>
                <img src={usineImage} alt="presentationImage" />
            </div>
            <div className={style.mainContainer}>
                <Typography
                    variant="h2"
                    sx={{
                        textAlign: 'center',
                        color: '#77451b',
                        fontSize: { xs: '1em', sm: '1.5em' },
                        fontWeight: 600
                    }}
                >
                    Ils nous ont fait confiance
                </Typography>

                <Slider arrows={false} {...settings}>
                    <div className={style.container}>
                        <img src={slider1} alt="sliderReferenceOne" />
                    </div>
                    <div className={style.container}>
                        <img src={slider2} alt="sliderReferenceTwo" />
                    </div>
                    <div className={style.container}>
                        <img src={slider3} alt="sliderReferenceThree" />
                    </div>
                    <div className={style.container}>
                        <img src={slider4} alt="sliderReferenceFour" />
                    </div>
                    <div className={style.container}>
                        <img src={slider5} alt="sliderReferenceFive" />
                    </div>
                    <div className={style.container}>
                        <img src={slider6} alt="sliderReferenceSix" />
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default HomePage;