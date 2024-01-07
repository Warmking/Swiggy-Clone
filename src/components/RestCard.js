import {RES_URL} from "../utils/constants"
const RestCard = (props) => {
    // console.log(props.resData.info.name);
    const {name,avgRating,cuisines,costForTwo,sla} = props.resData.info
    // console.log(name,avgRating,cuisines);
    // console.log(resName);
    return (
      <div className="w-40 m-2 p-1 border-black">
        <img className="w-48 h-44" src={RES_URL+props.resData.info.cloudinaryImageId}></img>
        <h3 >{name}</h3>
        <h5 >⭐ : {avgRating}</h5>
        <h5 > Delivary Time : {sla.deliveryTime}</h5>
        <h5 >{cuisines.join(", ")}</h5>
        <h5 > Couple pack Cost : {costForTwo}</h5>
      </div>
    )
  } 

  export default RestCard;