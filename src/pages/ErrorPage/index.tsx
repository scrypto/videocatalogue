import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import Error from "../../components/Error";

const HomePage = () => {
    const pageTitle = "Popular Titles";

    return (
        <DefaultLayout title={pageTitle}>
            <Error />
        </DefaultLayout>
    );
};

export default HomePage;