import React from "react"
import renderer from "react-test-renderer"
import COMPONENT from ".."

const createProps = () => ({
  classes: {},
})

describe("<COMPONENT />", () => {
  it("Does not explode", () => {
    const props = createProps()
    const component = renderer.create(<COMPONENT {...props} />).toJSON()
    expect(component).toMatchSnapshot()
  })
})
