import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData, useParams } from "react-router-dom";


const ArtCraftDetails = () => {

            const craftDetails=useLoaderData()
            console.log(craftDetails);
            const{id}=useParams();
            const [details, setDetails] = useState([]);

      useEffect(() => {
            const findDetails = craftDetails.find((item) => item. _id === id)
            setDetails(findDetails)
      }, [])

      const{subcategory,price,rating,customization,time,status,image,shortDes,name,email,_id}=details
            return (
                        <section className=" dark:text-gray-800">
                               <Helmet>
                <title>ArtCraftDetails</title>
            </Helmet>

                 
                  <div className="container max-w-6xl my-10 mx-auto space-y-6 sm:space-y-12">
                        < a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
                              <img data-aos="fade-right"
                                    data-aos-offset="300"
                                    data-aos-easing="ease-in-sine" src={image} alt="" className="object-cover h-80 rounded sm:h-96 lg:col-span-6  p-3  dark:bg-gray-500" />
                                    
                              <div data-aos="fade-left"
                                    data-aos-anchor="#example-anchor"
                                    data-aos-offset="500"
                                    data-aos-duration="500" className="p-6 space-y-4 border-l-2 px-3 lg:col-span-6">
                                    <h3 className="text-2xl font-semibold ">{subcategory}</h3>
                                  
                                  <div className="flex gap-10">
                                    <p> Status : {status}</p>
                                  <p>customization : {customization}</p>
                                  <p>Time : {time}</p>
                                  </div>
                                  <div className="flex gap-10">
                                                <p>Price : {price}</p>
                                                <p>Rating : {rating}</p>
                                    </div>

                               <p>Email : {email}</p>
                               <p>Name : {name}</p>
                               <p>
                                    Description : {shortDes}
                               </p>
                                   
                              </div>
                        </a>


                  </div>
            </section>
            );
};

export default ArtCraftDetails;