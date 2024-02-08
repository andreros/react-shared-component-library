/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import { Component1 } from "./Component1";

test("renders component 1", () => {
  const { container } = render(<Component1 className="my-class" />);
  expect(container.getElementsByClassName("my-class")).toBeDefined();
});
