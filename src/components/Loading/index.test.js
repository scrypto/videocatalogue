import { shallow } from "enzyme";
import React from "react";
import Loading from "./";

describe("Component: Loading", () => {
    const loadingText = "Loading...";

    it("should render the Loading element", () => {
        const wrapper = shallow(<Loading />);
        expect(wrapper).toHaveLength(1);
    });

    it("should contain the correct word", () => {
        const wrapper = shallow(<Loading />);
        const text = wrapper.text();
        expect(text).toBe(loadingText);
    });
});
