import { shallow } from "enzyme";
import React from "react";
import Tile from "./";

describe("Component: Tile", () => {
    const titleText = "Test Title";

    it("should render the element", () => {
        const wrapper = shallow(<Tile title={titleText} />);
        expect(wrapper).toHaveLength(1);
    });

    it("should contain the correct title text", () => {
        const wrapper = shallow(<Tile title={titleText} />);
        const title = wrapper.find(".title");
        expect(title.text()).toBe(titleText);
    });

    it ("should perform onTileClick when the element is clicked", () => {
        const onTileClickFunctionMock = jest.fn();
        const onTileClickMock = jest.fn(() => {onTileClickFunctionMock()});

        const wrapper = shallow(<Tile title={titleText} onTileClick={onTileClickMock} />);
        wrapper.simulate("click");
        expect(onTileClickFunctionMock).toBeCalledTimes(1);
    });
});

describe("Component: Tile: Image", () => {
    const titleText = "Test Title";
    const imageSource = "http://www.test.com/image.png";

    it("should render the element", () => {
        const wrapper = shallow(<Tile title={titleText} image={imageSource} />);
        const image = wrapper.find("img.image");
        expect(image).toHaveLength(1);
    });

    it("should contain the correct image source", () => {
        const wrapper = shallow(<Tile title={titleText} image={imageSource} />);
        const image = wrapper.find("img.image");
        expect(image.prop("src")).toBe(imageSource);
    });
});

describe("Component: Tile: Placeholder", () => {
    const titleText = "Test Title";
    const placeholderText = "Placeholder";

    it("should render the element", () => {
        const wrapper = shallow(<Tile title={titleText} placeholder={placeholderText} />);
        const placeholder = wrapper.find(".placeholder");
        expect(placeholder).toHaveLength(1);
    });

    it("should contain the correct placeholder", () => {
        const wrapper = shallow(<Tile title={titleText} placeholder={placeholderText} />);
        const placeholder = wrapper.find(".placeholder");
        expect(placeholder.text()).toBe(placeholderText);
    });
});
