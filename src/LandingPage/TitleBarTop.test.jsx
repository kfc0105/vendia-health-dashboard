import TitleBarTop from "./TitleBarTop.js";
import renderer from "react-test-renderer";

it("Title appears", () => {
  const component = renderer.create(<TitleBarTop />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
