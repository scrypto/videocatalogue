import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import DefaultLayout from "../../layouts/DefaultLayout";
import Tile , { PlaceholderType } from "../../components/Tile";

const pageTitle = "Popular Titles";

class HomePage extends React.Component<any> {
    onTileClick = (item: PlaceholderType) => {
        const redirectUrl: string = `/${item}`;
        this.props.history.push(redirectUrl);
    };

    render() {
        return (
            <DefaultLayout title={pageTitle}>
                <Tile title="Popular Series" placeholder={PlaceholderType.SERIES} onTileClick={this.onTileClick} />
                <Tile title="Popular Movies" placeholder={PlaceholderType.MOVIES} onTileClick={this.onTileClick} />
            </DefaultLayout>
        );
    }
};

export default withRouter<any>(HomePage);