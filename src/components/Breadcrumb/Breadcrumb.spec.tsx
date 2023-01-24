import React from "react";
import Breadcrumb from "./Breadcrumb";
import { bestCategory } from "../../utilities/mocks/BestCategory";
import { render, screen } from "@testing-library/react";

describe("components/Breadcrumb", () => {
  test("Breadcrumb should render Correctly", () => {
    render(<Breadcrumb categories={bestCategory} />);
    expect(screen.getByText("Celulares y Teléfonos")).toBeInTheDocument();
    expect(screen.getByText("Celulares y Smartphones")).toBeInTheDocument();
  });
});
