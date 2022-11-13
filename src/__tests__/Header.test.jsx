import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import { describe, it, expect, beforeEach } from "vitest";
import Header from "~/components/Header";
import templateSlice from "~/redux/features/templateSlice";
import configureStore from "redux-mock-store";
import TestRenderer from "react-test-renderer";

// Test Header Component renders properly
let component;
describe("Header component", () => {
  const mockStore = configureStore([]);
  beforeEach(() => {
    let div = document.createElement("div");
    const store = mockStore({
      template: templateSlice,
    });
    component = ReactDOM.render(
      <Provider store={store}>
        <Header />
      </Provider>,
      div
    );
  });

  it("should render properly with given state from Redux store", () => {
    const tree = TestRenderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
