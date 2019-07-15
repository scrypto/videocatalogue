import { shallow } from "enzyme";
import React from "react";
import Error from "./";

describe("Component: Error", () => {
    const errorText = "Oops, something went wrong...";

    it("should render the element", () => {
        const wrapper = shallow(<Error />);
        expect(wrapper).toHaveLength(1);
    });

    it("should contain the correct error text", () => {
        const wrapper = shallow(<Error />);
        const text = wrapper.text();
        expect(text).toBe(errorText);
    });
});
