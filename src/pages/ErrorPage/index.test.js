import { shallow } from "enzyme";
import React from "react";
import ErrorPage from "./";

describe("Pages: ErrorPage", () => {
    it("should render the element", () => {
        const wrapper = shallow(<ErrorPage />);
        expect(wrapper).toHaveLength(1);

        const layout = wrapper.find("DefaultLayout");
        expect(layout).toHaveLength(1);

        const children = layout.find("Error");
        expect(children).toHaveLength(1);
    });
});