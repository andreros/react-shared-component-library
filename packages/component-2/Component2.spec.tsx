/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import { Component2 } from "./Component2";

test("renders component 2", () => {
  const { container } = render(<Component2 className="my-class" />);
  expect(container.getElementsByClassName("my-class")).toBeDefined();
});
