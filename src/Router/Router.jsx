import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Notfound from "../Pages/Notfound/Notfound";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Rigister/Register";
import AddCraftItem from "../Pages/AddCraftItem/AddCraftItem";

const router = createBrowserRouter([
            {
              path: "/",
              element: <Root></Root>,
              errorElement:<Notfound></Notfound>,
              children:[
                        {
                                    path:'/',
                                    element:<Home></Home>
                        },
                        {
                                    path:'/login',
                                    element:<Login></Login>
                        },
                        {
                                    path:'/register',
                                    element:<Register></Register>
                        },
                        {
                          path:'/addCraftItem',
                          element:<AddCraftItem></AddCraftItem>
                        }
              ]
            },
          ]);


 export default router