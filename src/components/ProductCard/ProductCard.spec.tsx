import React from "react";
import renderer from "react-test-renderer";
import { productCardProps } from "../../mocks/productCardProps";
import ProductCard from "./ProductCard";

describe("components/ProductCard", () => {
  test("ProductCard should render Correctly", () => {
    const container = renderer.create(<ProductCard {...productCardProps} />);
    expect(container.toJSON()).toMatchSnapshot();
  });
});
