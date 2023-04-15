import Header from "../Header";
import { render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import store from "../../ReduxStore/Store";

import { StaticRouter } from "react-router-dom/server";

test("Logo should be Loaded in Header ", async () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const logo = header.getAllByTestId("logo")[0];
  await waitFor(() =>
    expect(logo).toHaveAttribute(
      "src",
      "https://1000logos.net/wp-content/uploads/2021/05/Swiggy-logo.png"
    )
  );

  expect(logo).toBeInTheDocument();
});

test("Cart should have zero items intiall render ", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const cartLength = (header.getByTestId("cart-length"));
  expect(parseInt(cartLength.innerHTML)).toBe(0);
});
