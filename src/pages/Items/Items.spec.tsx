import React from "react";
import Items from "./Items";
import renderer from "react-test-renderer";
import { state } from "../../mocks/state";
import * as redux from "react-redux";

describe("pages/Items", () => {
  beforeEach(() => {
    const spy = jest.spyOn(redux, "useSelector");
    spy
      .mockReturnValueOnce([...state.items])
      .mockReturnValueOnce([...state.bestCategory]);
  });
  test("Items should render Correctly", () => {
    const container = renderer.create(<Items />);
    expect(container.toJSON()).toMatchSnapshot();
  });
});
