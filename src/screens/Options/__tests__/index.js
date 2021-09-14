import React from "react"
import {render, cleanup, store} from '../../../../jest/testUtils';
import Options from ".."

afterEach(() => {
  cleanup();
  store.clearActions();
});

describe("<Options />", () => {
  const createProps = () => ({
    navigation: {}
  })

  it("Does not explode", () => {
    const props = createProps()
    const component = render(<Options {...props} />).toJSON()
    expect(component).toMatchSnapshot()
  })
})
