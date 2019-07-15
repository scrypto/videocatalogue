import React, { useEffect, useState } from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import Tile  from "../../components/Tile";
import { ProgramType } from "../../models";
import { get } from "lodash";
import axios from "axios";
import {entriesUrl} from "../../config";

const MoviesPage = () => {
    const [entries, setEntries] = useState([]);
    useEffect( () => {
        const fetchData = async () => {
            const result = await axios(entriesUrl);
            const resultEntries = get(result, ["data", "entries"]);
            setEntries(resultEntries);
        };

        fetchData();
    }, []);

    const pageTitle = "Popular Series";

    const preparedEntries = entries
        .filter((item) => {
            return get(item, ["releaseYear"], 0) >= 2010
                && get(item, ["programType"]) === ProgramType.SERIES;
        })
        .sort((a, b) => {
            const firstTitle = get(a,["title"], "").toLowerCase();
            const secondTitle = get(b, ["title"], "").toLowerCase();
            return firstTitle > secondTitle ? 1 : -1;
        })
        .slice(0, 21);

    return (
        <DefaultLayout title={pageTitle}>
            {preparedEntries.map((item: any, index: number) => {
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