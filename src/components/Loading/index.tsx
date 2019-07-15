import React from "react";
import styles from "./Loading.module.scss";

const Loading = () => {
    const loadingText = "Loading...";
    return (
        <div className={styles.loading}>
            {loadingText}
        </div>
    );
};

export default Loading;