import React from "react"
import {render, cleanup, store} from '../../../../jest/testUtils';
import Home from ".."

afterEach(() => {
  cleanup();
  store.clearActions();
});

describe("<Home />", () => {
  it("Does not explode", () => {
    const rendered = render(<Home />).toJSON();
    expect(rendered).toMatchSnapshot();
  })
})
