import React from "react"
import {render, cleanup, store} from '../../../../jest/testUtils';
import Languages from ".."

afterEach(() => {
  cleanup();
  store.clearActions();
});

describe("<Languages />", () => {
  it("Does not explode", () => {
    const component = render(<Languages />).toJSON();
    expect(component).toMatchSnapshot()
  })
})
