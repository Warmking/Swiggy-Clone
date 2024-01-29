import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


export const Header = () => {
  const [buttonText, setButtonText] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const {logInUser} = useContext(UserContext) 
  // useEffect(()=>{
  //   console.log();
  // },[buttonText])

  // -- subscribing to the store using a selector to a portion of a store. 
  const cartItems = useSelector((store)=>store.cart.items)
  console.log(cartItems);
  
  return (
    <div className="flex justify-between bg-emerald-100 sticky top-0 z-10">
      <img className="m-2 w-16 rounded-full" src={LOGO_URL} />
      <div className="flex items-center">
      <ul className="flex">
        <li className="mx-2">Online {onlineStatus ? "✅" : "🔴"}</li>
        <li className="mx-2">
          <Link to="/">Home</Link>
        </li>
        <li className="mx-2">
          <Link to="/about">About US</Link>
        </li>
        <li className=" mx-2">
          <Link to="/contact">Contact US</Link>
        </li>
        <li className=" mx-2 font-bold">
        <Link to='/cart'>Cart ({cartItems.length} items)</Link>
        </li>
        <button
          className="mx-2"
          onClick={() => {
            buttonText === "Login"
              ? setButtonText("Logout")
              : setButtonText("Login");
          }}
        >
          {buttonText}
        </button>
        <li className=" mx-2 font-bold">{logInUser}</li>
      </ul>
      </div>
    </div>
  );
};

export default Header;
