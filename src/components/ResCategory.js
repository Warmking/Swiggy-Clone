import { useState } from "react";
import ItemList from "./ItemsList";

const ResCategory = ({ data ,listView,setShowIndex }) => {
  // const [listView, setListView] = useState(true);
  const [arrowIcon, setArrowIcon] = useState("🔼");
  return (
    <div>
      <div className="w-7/12 mx-auto my-4 bg-gray-50 p-4 shadow-lg ">
        <div
          className="flex justify-between hover:cursor-pointer"
          onClick={() => {
            // setListView(!listView);
              setShowIndex()
            listView ? setArrowIcon("🔽"): setArrowIcon("🔼");
          }}
        >
          <span className="font-bold text-xl">
            {data.title} ({data?.itemCards?.length})
          </span>
          <span>{arrowIcon}</span>
        </div>
        {listView && <ItemList listItems={data.itemCards} />}
      </div>
    </div>
  );
};

export default ResCategory;
