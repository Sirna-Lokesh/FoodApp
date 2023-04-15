import MenuItemCard from "../MenuItem";
import { Provider } from "react-redux";
import store from "../../ReduxStore/Store";
import { fireEvent, render } from "@testing-library/react";

import Header from "../Header";
import { StaticRouter } from "react-router-dom/server";

test("Item should be added if you click on the addItem button ", () => {
  const menuItem = render(
    <StaticRouter>
      <Provider store={store}>
        <MenuItemCard />
      </Provider>
    </StaticRouter>
  );

  const addItemButton = menuItem.getByTestId("add-item-button");
  console.log(addItemButton);


  

  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header></Header>
      </Provider>
    </StaticRouter>
  );

  //before clicking add item button cartlength should be 0
  let cartLength = (header.getByTestId("cart-length"));
  expect(parseInt(cartLength.innerHTML)).toBe(0);

  fireEvent.click(addItemButton);
  //after clicking add item button cartlength should be increased by 1
  
  cartLength = (header.getByTestId("cart-length"));
  expect(parseInt(cartLength.innerHTML)).toBe(1);
  
});

//mock fetch 
import { DUMMY_MENU_DATA } from "../mocks/mock";
global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json : () =>{
             return Promise.resolve(DUMMY_MENU_DATA)
        } 
    })
})

