import React, { lazy, useEffect, useState, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import Contact from "./components/Contact";
import ResMenu from "./components/ResMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const About = lazy(() => import("./components/About"));

const App = () => {
  const [userName, setUserName] = useState();
  //sent authentication details
  useEffect(() => {
    const data = {
      name: "Mohan Reddy",
    };
    setUserName(data.name);
  }, []);

  
  return (
    <Provider store={appStore} >
    <UserContext.Provider value={{ logInUser: userName, setUserName }}>
      <div className="">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={() => <div>{".....Loading"}</div>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <ResMenu />,
      },
      {
        path:'/cart',
        element : <Cart/>
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(root);
root.render(<RouterProvider router={appRouter} />);
