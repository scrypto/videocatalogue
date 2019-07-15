import { shallow } from "enzyme";
import React from 'react';
import MoviesPage from "./";

import data from "../../mocks/sample.json";

describe("Pages: MoviesPage", () => {
    it("should render the element", async () => {
        const wrapper = shallow(<MoviesPage />);
        expect(wrapper).toHaveLength(1);

        const layout = wrapper.find("DefaultLayout");
        expect(layout).toHaveLength(1);

        const tiles = layout.find("Tile");
        // ToDo: this is currently not being executed
        setTimeout(() => {
            expect(tiles).toHaveLength(21);
        });
    });
});