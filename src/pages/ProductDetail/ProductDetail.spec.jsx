import React from "react";
import ProductDetail from "./ProductDetail";
import router from "react-router-dom";
import { render, screen } from "@testing-library/react";
import axios from "axios";
import { getItemInfo } from "../../mocks/getItemInfo";
import { getDescription } from "../../mocks/getDescription";
import CustomProvider from "../../store/CustomProvider";

const mockUseSelector = jest.fn();

jest.mock("axios");

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: () => mockUseSelector,
}));

describe("components/ProductDetail", () => {
  beforeEach(() => {
    const spy = jest.spyOn(router, "useParams");
    spy.mockReturnValue({ id: "MLA931455240" });
    axios.get.mockResolvedValueOnce({ data: { ...getItemInfo }, status: 200 });
    axios.get.mockResolvedValueOnce({
      data: { ...getDescription },
      status: 200,
    });
  });
  test("ProductDetail should render Correctly", async () => {
    mockUseSelector.mockReturnValue([
      { id: "MLA1055", name: "Celulares y Smartphones", results: 5 },
    ]);
    render(
      <CustomProvider>
        <ProductDetail />
      </CustomProvider>
    );

    const title = await screen.findByText("Apple iPhone 11 (128 Gb) - Blanco");
    expect(title).toBeVisible();
    const category = await screen.findByText("Celulares y Smartphones");
    expect(category).toBeVisible();
  });
});
