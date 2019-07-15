import React from "react";
import styles from "./Header.module.scss";
import Login from "../Login";

const Header = () => {
    const headerTitle = "DEMO Streaming";
    const buttonText = "Start your free trial";
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <span className={styles.title}>{headerTitle}</span>
                <div className={styles.content}>
                    <Login />
                    <div className={styles.button}>{buttonText}</div>
                </div>

            </div>
        </div>
    );
};

export default Header;