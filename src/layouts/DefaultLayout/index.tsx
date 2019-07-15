import React from "react";
import styles from "./DefaultLayout.module.scss";
import SubHeader from "../../components/SubHeader";

interface IProps {
    title: string;
    children: any;
}

const DefaultLayout = ({ title, children }: IProps) => {
    return (
        <>
            <SubHeader title={title} />
            <div className={styles.page}>
                {children}
            </div>
        </>
    );
};

export default DefaultLayout;