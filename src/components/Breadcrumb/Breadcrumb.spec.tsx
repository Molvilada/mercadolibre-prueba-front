import React from "react";
import Breadcrumb from "./Breadcrumb";
import { render, screen } from "@testing-library/react";
import { state } from "../../mocks/state";

describe("components/Breadcrumb", () => {
  test.only("Breadcrumb should render Correctly", () => {
    render(<Breadcrumb categories={[...state.bestCategory]} />);
    expect(screen.getByText("Audio")).toBeInTheDocument();
  });
});
