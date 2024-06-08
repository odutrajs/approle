import React from "react";
import { renderWithProviders } from "../../../jest.setup";
import SignInScreen from "./index";

describe("SignInScreen", () => {
  it("should render correctly", () => {
    const tree = renderWithProviders(<SignInScreen />);
    expect(tree).toMatchSnapshot();
  });
});
