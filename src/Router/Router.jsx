import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Notfound from "../Pages/Notfound/Notfound";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Rigister/Register";
import AddCraftItem from "../Pages/AddCraftItem/AddCraftItem";
import ArtCraftDetails from "../Pages/ArtCraftDetails/ArtCraftDetails";
import PrivateRoute from "./PrivateRout/PrivateRoute";
import AllArtCraftItems from "../Pages/AllArtCraftItems/AllArtCraftItems";
import ArtCraftList from "../Pages/ArtCraftList/ArtCraftList";

const router = createBrowserRouter([
            {
              path: "/",
              element: <Root></Root>,
              errorElement:<Notfound></Notfound>,
              children:[
                        {
                                    path:'/',
                                    element:<Home></Home>,
                                    loader:()=>fetch('http://localhost:5000/addCraft')
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
                          element:<PrivateRoute><AddCraftItem></AddCraftItem></PrivateRoute>
                        },
                        {
                          path:'/artCraftDetails/:id',
                          element:<PrivateRoute><ArtCraftDetails></ArtCraftDetails></PrivateRoute>,
                          loader:()=>fetch('http://localhost:5000/addCraft')
                        },
                        {
                          path:'/artCraftItem',
                          element:<AllArtCraftItems></AllArtCraftItems>,
                          loader:()=>fetch('http://localhost:5000/addCraft')
                        },
                        {
                          path:'/artCraftList',
                          element:<ArtCraftList></ArtCraftList>
                        }
              ]
            },
          ]);


 export default router