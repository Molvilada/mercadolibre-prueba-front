import React from "react";
import SearchBar from "./SearchBar";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { mockNavigate } from "../../setupTests";

describe("components/SearchBar", () => {
  test("write inside SearchBar", () => {
    render(<SearchBar />);
    userEvent.type(screen.getByRole("textbox"), "iphone 11");
    expect(screen.getByRole("textbox")).toHaveValue("iphone 11");
  });
  test("when click search icon or press enter", () => {
    render(<SearchBar />);
    userEvent.type(screen.getByRole("textbox"), "iphone");
    const button = screen.getByTestId("searchIcon");
    userEvent.click(button);
    expect(mockNavigate).toHaveBeenCalledWith("/items?search=iphone");
  });
});
