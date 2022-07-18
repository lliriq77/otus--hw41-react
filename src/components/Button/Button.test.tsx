import React from "react";
import { getByTestId, render, screen } from "@testing-library/react";
import { Button } from "./Button";
import "@testing-library/jest-dom";

describe("Button", () => {
  it("renders Component", () => {
    render(<Button label={"Button"} />);
    render(<Button label={"Button2"} disabled />);
    expect(screen.getByText("Button")).toBeInTheDocument();
    expect(screen.getAllByTestId("testbutt")[0]).not.toBeDisabled();
    expect(screen.getAllByTestId("testbutt")[1]).toBeDisabled();
  });
});
