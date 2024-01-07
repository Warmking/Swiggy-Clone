import { useParams } from "react-router-dom";
import ShimmerUi from "./ShimmerUi";
import {  RES_MENU_IMG_URL } from "../utils/constants";
import useRestaurentMenu from "../utils/useRestaurentMenu";

const ResMenu = () => {
  const { resId } = useParams();
  const resMenuItems = useRestaurentMenu(resId);

  if (!resMenuItems) {
    return <ShimmerUi></ShimmerUi>;
  }
  return (
    <div>
      <ul>
        {resMenuItems.map((items) => {
          return (
            <div>
              {items?.card?.info?.imageId && (
                <img
                  style={{ width: "100px", height: "100px" }}
                  src={RES_MENU_IMG_URL + items.card.info.imageId}
                ></img>
              )}
              <h2 key={items.card.info.id}>{items.card.info.name}</h2>
              <h2>{"Rs." + items.card.info.price / 100}</h2>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default ResMenu;
