import { mount } from "enzyme";
import React from "react";
import DefaultLayout from "./";

describe("Layout: DefaultLayout", () => {
    const titleText = "Test Title";
    const childrenElement = <div className="children"></div>;

    it("should render the element", () => {
        const wrapper = mount(<DefaultLayout title={titleText}>{childrenElement}</DefaultLayout>);
        expect(wrapper).toHaveLength(1);

        const subHeader = wrapper.find("SubHeader");
        expect(subHeader).toHaveLength(1);

        const children = wrapper.find(".children");
        expect(children).toHaveLength(1);
    });

    it("should contain the right SubHeader title", () => {
        const wrapper = mount(<DefaultLayout title={titleText}>{childrenElement}</DefaultLayout>);

        const subHeader = wrapper.find("SubHeader");
        expect(subHeader.text()).toBe(titleText);
    });
});