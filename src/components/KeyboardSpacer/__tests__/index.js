import React from "react"
import renderer from "react-test-renderer"
import KeyboardSpacer from ".."

const createProps = () => ({
  classes: {},
})

describe("<KeyboardSpacer />", () => {
  it("Does not explode", () => {
    const props = createProps()
    const component = renderer.create(<KeyboardSpacer {...props} />).toJSON()
    expect(component).toMatchSnapshot()
  })
})
