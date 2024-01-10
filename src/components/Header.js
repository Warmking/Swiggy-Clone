import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Header = () => {
  const [buttonText, setButtonText] = useState("Login");
  const onlineStatus = useOnlineStatus();
  // useEffect(()=>{
  //   console.log();
  // },[buttonText])
  return (
    <div className="flex justify-between bg-lime-200">
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
        <li className=" mx-2">Cart</li>
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
      </ul>
      </div>
    </div>
  );
};

export default Header;
