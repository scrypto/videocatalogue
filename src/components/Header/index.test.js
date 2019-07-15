import { shallow } from "enzyme";
import React from "react";
import Header from "./";

describe("Component: Header", () => {
    const titleText = "DEMO Streaming";
    const buttonText = "Start your free trial";

    it("should render the element", () => {
        const wrapper = shallow(<Header />);
        expect(wrapper).toHaveLength(1);

        const container = wrapper.find(".container");
        expect(container).toHaveLength(1);
    });

    it("should contain the correct title text", () => {
        const wrapper = shallow(<Header />);
        const title = wrapper.find(".title");
        expect(title.text()).toBe(titleText);
    });

    it("should contain a Login element", () => {
        const wrapper = shallow(<Header />);
        const login = wrapper.find("Login");
        expect(login).toHaveLength(1);
    });

    it("should contain a Free Trial button", () => {
        const wrapper = shallow(<Header />);
        const button = wrapper.find("div.button");
        expect(button).toHaveLength(1);
        expect(button.text()).toBe(buttonText);
    });
});