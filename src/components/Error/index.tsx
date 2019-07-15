import React from "react";
import styles from "./Error.module.scss";

const Error = () => {
    const errorText = "Oops, something went wrong...";
    return (
        <div className={styles.error}>
            {errorText}
        </div>
    );
};

export default Error;