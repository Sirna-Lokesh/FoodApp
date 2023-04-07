//logic for filtering based on search
export async function filterRests(text, allRestaurants,setFilteredRestaurants) {
    const afterFilteration = await allRestaurants?.filter((restaurant) => {
      if (restaurant?.data?.name?.toLowerCase().includes(text.toLowerCase())) {
        return restaurant;
      }
    });
    setFilteredRestaurants(afterFilteration);
    console.log(afterFilteration);
}
  
//logic for sorting based on a parameter
export async function customSort(restaurants,setAllrestaurants,setFilteredRestaurants) {
    const sortingParameter = prompt(
      "choose sorting parameter : price-1 deliveryTime - 2 Rating -3"
    );
    if (sortingParameter == 1) {
      await restaurants.sort((r1, r2) => {
        if (parseInt(r1?.data?.costForTwo) > parseInt(r2?.data?.costForTwo)) {
          return 1;
        } else {
          return -1;
        }
      });
    } else if (sortingParameter == 2) {
      await restaurants.sort((r1, r2) => {
        if (
          parseInt(r1?.data?.minDeliveryTime) >
          parseInt(r2?.data?.minDeliveryTime)
        ) {
          return 1;
        } else {
          return -1;
        }
      });
    } else if (sortingParameter == 3) {
      await restaurants.sort((r1, r2) => {
        if (parseInt(r1?.data?.avgRating) > parseInt(r2?.data?.avgRating)) {
          return -1;
        } else {
          return 1;
        }
      });
    }
    restaurants.map((rest) => console.log(rest?.data?.costForTwo));
    setFilteredRestaurants([...restaurants]);
    setAllrestaurants(restaurants);
}

//fetching data from API
import { SWIGGY_RESTS_URL } from "../config";
export  async function getDataFromAPI(setAllrestaurants,setFilteredRestaurants) {
    let APIData = await fetch(SWIGGY_RESTS_URL);
    let json = await APIData.json();
    //console.log(json);
    setAllrestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
}

//style for rating-btns
export const goodRating={
    backgroundColor:"green"
}
export const badRating={
    backgroundColor:"red"
}





