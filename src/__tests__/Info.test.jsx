import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import { describe, it, expect, beforeEach } from "vitest";
import templateSlice from "~/redux/features/templateSlice";
import configureStore from "redux-mock-store";
import TestRenderer from "react-test-renderer";
import Info from "~/components/Info";

// Test Header Component renders properly
let component;
describe("Info component", () => {
  const mockStore = configureStore([]);
  beforeEach(() => {
    let div = document.createElement("div");
    const store = mockStore({
      template: templateSlice,
    });
    component = ReactDOM.render(
      <Provider store={store}>
        <Info />
      </Provider>,
      div
    );
  });

  it("should render properly with given state from Redux store", () => {
    const tree = TestRenderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
