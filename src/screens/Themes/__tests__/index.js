import React from "react"
import {render, cleanup, store} from '../../../../jest/testUtils';
import Themes from ".."

afterEach(() => {
  cleanup();
  store.clearActions();
});

describe("<Themes />", () => {
  const createProps = () => ({})
  it("Does not explode", () => {
    const props = createProps()
    const component = render(<Themes {...props} />).toJSON()
    expect(component).toMatchSnapshot()
  })
})
