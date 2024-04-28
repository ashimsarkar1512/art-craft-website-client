import { Link } from "react-router-dom";


const CraftItems = ({item}) => {
            const{subcategory,price,rating,customization,time,status,image,shortDes,name,email,_id}=item
            return (
                        <div data-aos="zoom-in" data-aos-duration="2000" className="card w-[350px] bg-base-100 shadow-xl mx-auto max-w6xl">
                        <figure className=""><img className="h-[250px]" src={image} /></figure>
                        <div className="card-body">
                          <h2 className="card-title text-white">{subcategory}</h2>
                              <div className="flex gap-5 text-white">
                                    <p> status : {status}</p>
                                    <p> custom : {customization}</p>
                                    
                                    </div>
                                    
                         
                          <div className="flex gap-5">
                          <p className="text-white">price : {price}</p>
                          <p className="text-white">Rating : {rating}</p>
                          </div>
                         
                          <div className="card-actions  ">
                            <Link to={`/artCraftDetails/${_id}`}><button className="bg-green-600 p-3 px-28 mx-auto w-full rounded-xl">Buy Now</button></Link>
                          </div>
                        </div>
                        </div>
            );
};

export default CraftItems;