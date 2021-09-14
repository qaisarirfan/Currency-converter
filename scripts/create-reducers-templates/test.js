import REDUCERS, {initialState} from ".."

describe("REDUCERS reducer", () => {
  it("should return the initial state", () => {
    expect(REDUCERS(undefined, {})).toEqual(initialState)
    expect(REDUCERS(undefined, {})).toMatchSnapshot()
  })
  it("should handle GET_POST_SUCCESS", () => {})
  it("should handle UPDATE_POST_SUCCESS", () => {})
  it("should handle GET_POST_FAIL", () => {})
  it("should handle GET_POST_START", () => {})
})
