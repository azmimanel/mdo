import React from "react";
import DrawerAppBar from "../components/Header";
import picture from "../Assets/img_0591.jpg";
import style from "./pages.module.css";
import { Button } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from "../Assets/Highcross_Leicester_logo.jpeg"
import slider2 from "../Assets/northPark.jpg";
import slider3 from "../Assets/log_new.png";
import slider4 from "../Assets/osaka-university-iscn-international-sustainable-campus-network-member.png";
import slider5 from "../Assets/astor_epigrafe.webp";
import slider6 from "../Assets/glendale-plaza-apartments-logo.png";
import Footer from "../components/Footer";
import presentationImage from "../Assets/presentation.jpg";
import usineImage from "../Assets/2.jpg"

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
    return (
        <div className={style.container}>
            <DrawerAppBar />
            <div className={`${style.displayFlex} ${style.homeSloganAndPictureContainer}`} >
                <div className={style.sloganAndShopNowContainer}>
                    <h2>Notre métier est un vrai art! C’est aussi une passion.</h2>
                    <Button className={style.shopNowButton}>Acheter Maintenant</Button>
                </div>
                <img src={picture} alt="home" className={style.firstPictureHomeStyle} />
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
                <p className={style.text}>
                    Les blocs, extraits de nos carrières de Thala (Thala Beige et Thala Gris) et de Foussana (Gris Foussana),
                    passent par plusieurs étapes en usine : réception, préparation,
                    sciage, débitage, traitements de surface, et travaux artistiques et finitions avec CNC pour un résultat de haute qualité.</p>
                <img src={usineImage} alt="presentationImage" />
            </div>
            <div className={style.mainContainer}>
                <h2 style={{ textAlign: 'center' }}> Ils nous ont fait confiance</h2>
                <Slider {...settings}>
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
            <Footer />
        </div>
    )
}

export default HomePage;