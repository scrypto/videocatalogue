import { shallow } from "enzyme";
import React from "react";
import Footer from "./";

describe("Component: Footer", () => {
    it("should render the element", () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper).toHaveLength(1);

        const container = wrapper.find(".container");
        expect(container).toHaveLength(1);

        const navigation = container.find(".navigation");
        expect(navigation).toHaveLength(1);

        const copyright = container.find(".copyright");
        expect(copyright).toHaveLength(1);

        const links = container.find(".links");
        expect(links).toHaveLength(1);

        const social = links.find(".social");
        expect(social).toHaveLength(1);

        const store = links.find(".store");
        expect(store).toHaveLength(1);
    });
});