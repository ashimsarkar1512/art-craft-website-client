import {  useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import CraftItems from "./CraftItems/CraftItems";


const Home = () => {

      const craftItems=useLoaderData()

            return (
                        <div>
                              <Banner></Banner>  

                              <div className="
                        grid grid-cols-1 bg-gray-100 md:grid-cols-3 p-7 gap-10">
                {
                    craftItems.map(item =><CraftItems key={item._id} item={item}></CraftItems>
                       
                    )
                }
            </div>
                        </div>
            );
};

export default Home;