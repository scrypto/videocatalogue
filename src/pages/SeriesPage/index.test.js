import { shallow } from "enzyme";
import React from "react";
import SeriesPage from "./";

describe("Pages: SeriesPage", () => {
    it("should render the element", () => {
        const wrapper = shallow(<SeriesPage />);
        expect(wrapper).toHaveLength(1);

        const layout = wrapper.find("DefaultLayout");
        expect(layout).toHaveLength(1);

        const tiles = layout.find("Tile");
        // expect(tiles).toHaveLength(21);
    });
});