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
import Update from "../Pages/Update/Update";

const router = createBrowserRouter([
            {
              path: "/",
              element: <Root></Root>,
              errorElement:<Notfound></Notfound>,
              children:[
                        {
                                    path:'/',
                                    element:<Home></Home>,
                                    loader:()=>fetch('https://art-craft-crud-server-b1bua5778-ashim-sarkars-projects.vercel.app/addCraft')
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
                          loader:()=>fetch('https://art-craft-crud-server-b1bua5778-ashim-sarkars-projects.vercel.app/addCraft')
                        },
                        {
                          path:'/artCraftItem',
                          element:<AllArtCraftItems></AllArtCraftItems>,
                          loader:()=>fetch('https://art-craft-crud-server-b1bua5778-ashim-sarkars-projects.vercel.app/addCraft')
                        },
                        {
                          path:'/artCraftList',
                          element:<PrivateRoute><ArtCraftList></ArtCraftList></PrivateRoute>,
                          loader:()=>fetch('https://art-craft-crud-server-b1bua5778-ashim-sarkars-projects.vercel.app/addCraft')
                        },
                        {
                          path:'/update/:id',
                          element:<Update></Update>,
                          loader:({params})=>fetch(`https://art-craft-crud-server-b1bua5778-ashim-sarkars-projects.vercel.app/addCrafts/${params.id}`)
                        }
              ]
            },
          ]);


 export default router