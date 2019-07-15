import { shallow } from "enzyme";
import React from "react";
import SubHeader from "./";

describe("Component: SubHeader", () => {
    const titleText = "Test Title";

    it("should render the element", () => {
        const wrapper = shallow(<SubHeader title={titleText} />);
        expect(wrapper).toHaveLength(1);
    });

    it("should contain the correct title text", () => {
        const wrapper = shallow(<SubHeader title={titleText} />);
        const container = wrapper.find(".container");
        const title = container.find(".title");
        expect(title.text()).toBe(titleText);
    });
});