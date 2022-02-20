import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import App from "./App";

describe("MyTitle tests", () => {
  let component: ShallowWrapper;

  it("should render properly", () => {
    givenComponent();
    thenItRendersProperly();
  });

  function givenComponent() {
    component = shallow(<App />);
  }


  function thenItRendersProperly() {
    expect(component).toMatchSnapshot();
  }

});