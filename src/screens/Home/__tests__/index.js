import React from "react"
import {render, cleanup, store} from '../../../../jest/testUtils';
import Home from ".."

afterEach(() => {
  cleanup();
  store.clearActions();
});

describe("<Home />", () => {
  const createProps = () => ({
    navigation: {}
  })
  it("Does not explode", () => {
    const props = createProps()
    const rendered = render(<Home {...props} />).toJSON();
    expect(rendered).toMatchSnapshot();
  })
})
