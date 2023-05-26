import React from "react";
import { fireEvent, render } from "@testing-library/react";
import EditableTodo from "./EditableTodo";

const todo = {
  id: 1,
  title: "Testing Code",
  description: "This is a test",
  priority: 1,
};

describe("EditableTodo tests", function () {
  it("renders without crashing", function () {
    render(<EditableTodo todo={todo} />);
  });

  it("contains expected text", function () {
    const result = render(<EditableTodo todo={todo} />);
    expect(result.queryByText("Testing Code")).toBeInTheDocument();
    expect(result.queryByText("This is a test")).toBeInTheDocument();
    expect(result.queryByText("Del")).toBeInTheDocument();
  });

 
});
