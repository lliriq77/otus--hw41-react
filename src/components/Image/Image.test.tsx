import React from "react";
import { render, screen } from "@testing-library/react";
import { Image } from "./Image";
import "@testing-library/jest-dom";

describe("image", () => {
  it("renders Component", () => {
    render(<Image />);
    expect(screen.getByTestId("testImage")).toBeInTheDocument();
  });
});
