import React from "react";
import styles from "./Footer.module.scss";

import facebook from "../../assets/images/social/facebook-white.svg";
import twitter from "../../assets/images/social/twitter-white.svg";
import instagram from "../../assets/images/social/instagram-white.svg";

import appstore from "../../assets/images/store/app-store.svg";
import playstore from "../../assets/images/store/play-store.svg";
import windowsstore from "../../assets/images/store/windows-store.svg";

const Footer = () => {
    const navigationLinks = [
        "Home",
        "Terms & Conditions",
        "Privacy Policy",
        "Collection Statement",
        "Help",
        "Manage Account"
    ];

    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.navigation}>
                    {navigationLinks.map((item, index) => {
                        return (<span key={index} className={styles.navigationItem}>{item}</span>);
                    })}
                </div>
                <div className={styles.copyright}>
                    Copyright &copy; 2018 DEMO Streaming. All Rights Reserved.
                </div>
                <div className={styles.links}>
                    <div className={styles.social}>
                        <img src={facebook} alt="facebook" />
                        <img src={twitter} alt="twitter" />
                        <img src={instagram} alt="instagram" />
                    </div>
                    <div className={styles.store}>
                        <img src={appstore} alt="app-store" />
                        <img src={playstore} alt="play-store" />
                        <img src={windowsstore} alt="windows-store" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;