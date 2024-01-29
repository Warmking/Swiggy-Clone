import { RES_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const ItemList = ({ listItems }) => {
  const dispatch = useDispatch();
  // handelItems function
  const handelItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div className="">
      <div>
        {listItems.map((item) => (
          <div
            key={item?.card?.info?.id}
            className="flex p-2 m-2 border-b-slate-200 border-b text-left justify-between"
          >
            <div className="w-9/12">
              <div className="py-2">
                <span className="text-lg font-medium font-sans">
                  {item?.card?.info?.name}{" "}
                </span>
                <span> - ₹{item?.card?.info?.price / 100}</span>
              </div>

              <p className="text-xs text-gray-600">
                {item?.card?.info?.description}
              </p>
            </div>
            <div className="w-3/12 p-1">
              <div className="absolute">
                {item?.card?.info?.imageId ? (
                  <button
                    className="mx-6 mt-16 px-6 py-2 rounded-lg text-green-600 font-semibold border-gray-400 border shadow-lg text-center text-sm bg-white"
                    onClick={() => handelItem(item)}
                  >
                    ADD
                  </button>
                ) : (
                  <button
                    className="mx-6 px-6 py-2 rounded-lg text-green-600 font-semibold border-gray-400 border shadow-lg text-center text-sm bg-white"
                    onClick={() => handelItem(item)}
                  >
                    ADD
                  </button>
                )}
              </div>
              {item?.card?.info?.imageId && (
                <img
                  className="w-32 h-24 rounded-md shadow-md"
                  src={RES_URL + item?.card?.info?.imageId}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
