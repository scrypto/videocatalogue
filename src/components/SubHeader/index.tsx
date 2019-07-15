import React from "react";
import styles from "./SubHeader.module.scss";

interface IProps {
    title: string;
}

const SubHeader = ({ title }: IProps) => {
    return (
        <div className={styles.subheader}>
            <div className={styles.container}>
                <span className={styles.title}>{title}</span>
            </div>
        </div>
    );
};

export default SubHeader;