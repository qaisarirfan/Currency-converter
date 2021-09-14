import React from "react"
import renderer from "react-test-renderer"
import ReverseButton from ".."


describe("<ReverseButton />", () => {
  const createProps = () => ({
    onPress: () => {},
    text: "test"
  })
  it("Does not explode", () => {
    const props = createProps()
    const component = renderer.create(<ReverseButton {...props} />).toJSON()
    expect(component).toMatchSnapshot()
  })
})
