import { render, fireEvent } from "@testing-library/react";
import store from "../../ReduxStore/Store";
import { Provider } from "react-redux";

import CartItem from "../CartItem";

import Header from "../Header";

import { StaticRouter } from "react-router-dom/server";
import Cart from "../Cart";

import {useSelector } from "react-redux"

test("One more same Item should be added to cart if we click on the add button of CartItem", () => {
    const item = {
        imageId: "xyz.something",
        avgRating: "4",
        name: "Chicken - biriyani",
        price: "230",
        category: "Biriyani",
      };
  const cartItem = render(
    <StaticRouter>
      <Provider store={store}>
        <CartItem item={item} />
        <Header />
      </Provider>
    </StaticRouter>
  );

  //get the button through which we can add item into cart
  const addButtonOfCart = cartItem.getByTestId("add-item-button-of-cartitem");

  //find out cart  the length before adding item
  const cartLength = parseInt(cartItem.getByTestId("cart-length").innerHTML);
  //add an item
  fireEvent.click(addButtonOfCart);
  //find out cart  length after adding the item into cart
  const newCartLength = parseInt(cartItem.getByTestId("cart-length").innerHTML);

  // now newlength === oldlength +1

  expect(newCartLength).toBe(cartLength + 1);
  //The above code  checks whether the an item is added to cart or not , but we should also  check , whether the correct item is getting added or not 

  //pending test 
 
  
});

test("Item should be removed from the cart after clicking the remove button ", () => {
    const item = {
        imageId: "xyz.something",
        avgRating: "4",
        name: "Chicken - biriyani ",
        price: "230",
        category: "Biriyani",
      };
  const menuItemCard = render(
    <StaticRouter>
      <Provider store={store}>
        <CartItem item={item}/>
      </Provider>
    </StaticRouter>
  );
  const addButton = menuItemCard.getByTestId("add-item-button-of-cartitem");
  fireEvent.click(addButton);
  const removeButton = menuItemCard.getByTestId("remove-item-button-of-cartitem")
  //now we have some elements into the cart

  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  )

  const cartLength = parseInt(header.getByTestId("cart-length").innerHTML);
  fireEvent.click(removeButton);
  const newCartLength = parseInt(header.getByTestId("cart-length").innerHTML);

  expect(newCartLength).toBe(cartLength-1);

});
