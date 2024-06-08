import React from "react";
import renderer from "react-test-renderer";
import SignInScreen from ".";

describe("SignInScreen", () => {
  it("should render correctly", () => {
    const tree = renderer.create(<SignInScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
