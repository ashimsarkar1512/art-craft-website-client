import {  useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import CraftItems from "./CraftItems/CraftItems";
import Collection from "./collection/Collection";
import ArtCraftCategory from "./ArtCraftCategory/ArtCraftCategory";


const Home = () => {

      const craftItems=useLoaderData()

            return (
                        <div>
                              <div className="mt-2">
                              <Banner></Banner> 
                              </div> 

                              <div className="
                        grid grid-cols-1 bg-gray-100 md:grid-cols-3 p-7 gap-10">
                {
                    craftItems.map(item =><CraftItems key={item._id} item={item}></CraftItems>
                       
                    )
                }
            </div>

             
            
            <Collection></Collection>
                        </div>
            );
};

export default Home;