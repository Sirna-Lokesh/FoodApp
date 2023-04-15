import { render, fireEvent, waitFor , wait } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom/matchers";
import { act } from 'react-dom/test-utils';

import Body from "../Body";

import store from "../../ReduxStore/Store";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";

//mock fetch
import { DUMMY_RESTAURANT_DATA } from "../mocks/mock";
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(DUMMY_RESTAURANT_DATA);
    },
  });
});

test(" body component  should contain 15 hotel cards intially ", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => {
    expect(body.getByTestId("restaurant-list"));

  });

  const restaurantList = body.getByTestId("restaurant-list");

  expect(restaurantList.children.length).toBe(15);
});

test("test  searching functionality ", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );


  await waitFor(() => {
    expect(body.getByTestId("restaurant-list"));
  });


  act(() => {
      const input = body.getByTestId("input-box");
      const searchButton = body.getByTestId("search-rest-button");

    fireEvent.change(input, {
      target: {
        value: "multi",
      },
    });

    
    fireEvent.click(searchButton);

}); 
  


        
  
});
