import { shallow } from "enzyme";
import React from "react";
import Login from "./";

describe("Component: Login", () => {
    const loginText = "Log in";

    it("should render the element", () => {
        const wrapper = shallow(<Login />);
        expect(wrapper).toHaveLength(1);
    });

    it("should contain the correct login text", () => {
        const wrapper = shallow(<Login />);
        const text = wrapper.text();
        expect(text).toBe(loginText);
    });
});
