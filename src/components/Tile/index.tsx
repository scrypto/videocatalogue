import React from "react";
import styles from "./Tile.module.scss";

export enum PlaceholderType {
    MOVIES = "movies",
    SERIES = "series",
}

interface IProps {
    title: string;
    image?: string;
    placeholder?: PlaceholderType;
    onTileClick?: any;
}

const Tile = ({ title, image, placeholder, onTileClick } : IProps) => {
    const onClick = () => {
        if (onTileClick) {
            return onTileClick(placeholder);
        }
    };

    return (
        <div className={styles.tile} onClick={onClick}>
            {image && (<img className={styles.image} src={image} alt={title} />)}
            {!image && (
                <span className={styles.placeholder}>{placeholder}</span>
            )}
            <span className={styles.title}>{title}</span>
        </div>
    );
};

export default Tile;