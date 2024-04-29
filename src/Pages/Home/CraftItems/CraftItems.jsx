
import { Link } from "react-router-dom";


const CraftItems = ({item}) => {
  
            const{subcategory,price,rating,customization,time,status,image,_id}=item
            return (
                        <div data-aos="zoom-in" data-aos-duration="2000" className="card w-[350px] bg-base-100 shadow-xl mx-auto max-w6xl">
                        <figure className=""><img className="h-[250px]" src={image} /></figure>
                        <div className="card-body">
                          <h2 className="card-title text-orange-500">{subcategory}</h2>
                              <div className="flex gap-5 text-blue-600">
                                    <p> status : {status}</p>
                                    <p> custom : {customization}</p>
                                    
                                    </div>
                                    
                         
                          <div className="flex gap-5">
                          <p className="text-blue-600">price : {price}</p>
                          <p className="text-blue-600">Rating : {rating}</p>
                          </div>
                         
                          <div className="card-actions  ">
                            <Link to={`/artCraftDetails/${_id}`}><button className="bg-green-600 p-3 px-24 mx-auto w-full rounded-xl ">View details </button></Link>
                          </div>
                        </div>
                        </div>
            );
};

export default CraftItems;