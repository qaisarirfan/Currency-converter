import React from "react"
import renderer from "react-test-renderer"
import CustomStatusBar from ".."

const createProps = () => ({
  backgroundColor: "#000",
})

describe("<CustomStatusBar />", () => {
  it("Does not explode", () => {
    const props = createProps()
    const component = renderer.create(<CustomStatusBar {...props} />).toJSON()
    expect(component).toMatchSnapshot()
  })
})
