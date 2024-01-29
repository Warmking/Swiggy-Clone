import { useParams } from "react-router-dom";
import ShimmerUi from "./ShimmerUi";
import { RES_MENU_IMG_URL } from "../utils/constants";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import { title } from "process";
import { useState } from "react";
import ItemList from "./ItemsList";
import ResCategory from "./ResCategory";

const ResMenu = () => {
  const { resId } = useParams();
  const data = useRestaurentMenu(resId);
  const [showIndex,setShowIndex] = useState(null)
  if (!data) {
    return <ShimmerUi></ShimmerUi>;
  }
  const { name, cuisines, costForTwoMessage } =
    data?.cards[0]?.card?.card?.info;
  const categories =
    data?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (item) =>
        item?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return (
    <div className="text-center">
      <h1 className="font-bold font-sans text-3xl p-2">{name}</h1>
      <p>{cuisines + " - " + costForTwoMessage}</p>
      {categories.map((item, index) => (
        // controlled component
        <ResCategory
          key={index}
          data={item?.card?.card}
          listView={index === showIndex ? true : false}
          setShowIndex = {()=>setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default ResMenu;
