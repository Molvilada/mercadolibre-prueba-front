import React from "react";
import Items from "./Items";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("components/SearchBar", () => {
  test("write inside SearchBar", () => {
    render(<Items />);
  });
});
