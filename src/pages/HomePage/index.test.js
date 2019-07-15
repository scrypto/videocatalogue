import { mount, shallow } from "enzyme";
import React from "react";
import HomePage from "./";
import { MemoryRouter } from "react-router-dom";

describe("Pages: HomePage", () => {
    it("should render the element", () => {
        const wrapper = mount(<MemoryRouter><HomePage /></MemoryRouter>);
        expect(wrapper).toHaveLength(1);

        const layout = wrapper.find("DefaultLayout");
        expect(layout).toHaveLength(1);

        const tiles = layout.find("Tile");

        const seriesTile = tiles.at(0);
        expect(seriesTile.prop("title")).toEqual("Popular Series");

        const moviesTile = tiles.at(1);
        expect(moviesTile.prop("title")).toEqual("Popular Movies");
    });

    it("should have tiles that redirect to the correct locations", () => {
        const wrapper = mount(<MemoryRouter><HomePage /></MemoryRouter>);

        const layout = wrapper.find("DefaultLayout");
        const tiles = layout.find("Tile");

        const seriesTile = tiles.at(0);
        seriesTile.simulate("click");
        // ToDo: set expectation here

        const moviesTile = tiles.at(1);
        moviesTile.simulate("click");
        // ToDo: set expectation here
    });
});

/*

const onTileClick = (item: PlaceholderType) => {
        document.location.href = `/${item}`;
    };

    return (
        <DefaultLayout title={pageTitle}>
            <Tile title="Popular Series" placeholder={PlaceholderType.SERIES} onTileClick={onTileClick} />
            <Tile title="Popular Movies" placeholder={PlaceholderType.MOVIES} onTileClick={onTileClick} />
        </DefaultLayout>
    );
const sendEventToParentWindowMock = jest.fn();
    const onChangeImageMock = jest.fn(() => {
         sendEventToParentWindowMock();
    });

    const gallery = shallow(<Gallery images={imagesMockData} onChange={onChangeImageMock} />); // Passing the mocked onChangeImage as prop
    gallery.find('input#image-1').simulate('change');

    expect(sendEventToParentWindowMock).toBeCalled();
 */