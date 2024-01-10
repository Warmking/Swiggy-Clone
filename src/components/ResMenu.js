import { useParams } from "react-router-dom";
import ShimmerUi from "./ShimmerUi";
import { RES_MENU_IMG_URL } from "../utils/constants";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import { title } from "process";
import { useState } from "react";
import ItemList from "./ItemsList";

const ResMenu = () => {
  const [listViewFlag , setListViewFlag] = useState(false);
  const { resId } = useParams();
  const resMenuItems = useRestaurentMenu(resId);
  // console.log(resMenuItems);
  
  
  if (!resMenuItems) {
    return <ShimmerUi></ShimmerUi>;
  }
  return (
    <div>
      <ul>
        {resMenuItems?.cards.map((items, i) => {
          return (
            <div key={i}>
              {items?.card?.card?.["@type"] ===
                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" && (
                <div className="flex justify-center">
                  <div className="w-6/12  m-1 p-2 bg-slate-50">
                    <div className="flex justify-between hover:cursor-pointer" onClick={()=>{
                            setListViewFlag(!listViewFlag)
                    }}>
                      <span className="font-bold">
                        {items?.card?.card?.title} (
                        {items?.card?.card?.itemCards.length})
                      </span>
                      <span>🔽</span>
                    </div>
                    {listViewFlag && <ItemList listItems={items}/>}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default ResMenu;
