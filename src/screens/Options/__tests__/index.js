import React from "react"
import {render, cleanup, store} from '../../../../jest/testUtils';
import Options from ".."

afterEach(() => {
  cleanup();
  store.clearActions();
});

describe("<Options />", () => {
  it("Does not explode", () => {
    const component = render(<Options />).toJSON()
    expect(component).toMatchSnapshot()
  })
})
