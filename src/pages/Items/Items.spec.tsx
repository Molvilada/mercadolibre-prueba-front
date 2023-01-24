import React from "react";
import Items from "./Items";
import renderer from "react-test-renderer";

describe("pages/Items", () => {
  test("Items should render Correctly", () => {
    const container = renderer.create(<Items />);
    expect(container.toJSON()).toMatchSnapshot();
  });
});
