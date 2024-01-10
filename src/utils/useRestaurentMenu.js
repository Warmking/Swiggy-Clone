import { useState, useEffect } from "react";
import { MENU_API} from "../utils/constants";
const useRestaurentMenu = (resId) => {
  const [resMenuItems, setResMenuItems] = useState(null);
  // console.log(resMenuItems);
  useEffect(() => {
    fetchApiMenu();
  }, []);
  //   console.log(resId);
  // fetch api menu
  const fetchApiMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    // console.log(
    //   json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
    //     ?.card?.itemCards
    // );
    //   console.log(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info?.name);
    const menu =
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR
      // json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
      //   ?.card?.itemCards;
    setResMenuItems(menu);
  };
  return resMenuItems;
};

export default useRestaurentMenu;
