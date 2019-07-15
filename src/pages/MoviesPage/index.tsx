import React, { useState, useEffect } from "react";
import axios from "axios";
import DefaultLayout from "../../layouts/DefaultLayout";
import Tile  from "../../components/Tile";
import { ProgramType } from "../../models";
import { get } from "lodash";
import { entriesUrl } from "../../config";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

const MoviesPage = () => {
    const [entries, setEntries] = useState([]);
    const [error, setError] = useState(null);
    useEffect( () => {
        const fetchData = async () => {
            try {
                const result = await axios(entriesUrl);
                const resultEntries = get(result, ["data", "entries"]);
                setEntries(resultEntries);
            } catch(e) {
                setError(e.message);
            }
        };

        fetchData();
    }, []);

    const pageTitle = "Popular Movies";

    const preparedEntries = entries
        .filter((item) => {
            return get(item, ["releaseYear"], 0) >= 2010
                && get(item, ["programType"]) === ProgramType.MOVIE;
        })
        .sort((a, b) => {
            const firstTitle = get(a,["title"], "").toLowerCase();
            const secondTitle = get(b, ["title"], "").toLowerCase();
            return firstTitle > secondTitle ? 1 : -1;
        })
        .slice(0, 21);

    return (
        <DefaultLayout title={pageTitle}>
            {error === null && entries.length === 0 && (
                <Loading />
            )}
            {error !== null && (
                <Error />
            )}
            {entries.length > 0 && preparedEntries.map((item: any, index: number) => {
                return (
                    <Tile
                        key={index}
                        title={get(item, ["title"], "")}
                        image={get(item, ["images", "Poster Art", "url"], "")}
                    />
                );
            })}
        </DefaultLayout>
    );
};

export default MoviesPage;