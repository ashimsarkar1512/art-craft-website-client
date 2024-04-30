import { useEffect, useState } from "react";



const ArtCraftCategory = () => {
                
             const [category,setCategory]=useState([])
            

             useEffect(()=>{
                    fetch("https://art-craft-crud-server.vercel.app/artCategory")
                    .then(res=>res.json())
                    .then(data=>{
                        setCategory(data)
                    })
             },[])
            
            

            return (
                        <div className=" p-6 rounded-md shadow-md bg-gray-900 dark:bg-gray-50 text-gray-50 dark:text-gray-900">

                                   
	<div className="
                        grid grid-cols-1 bg-gray-100 md:grid-cols-3 p-7 gap-10">

{

category.map(cate=>

            <div  key={cate._id}>

            <img  src={cate.image} alt="" className="object-cover h-56 object-center w-full rounded-md  bg-gray-500 dark:bg-gray-500" />
              <div className="mt-6 mb-2">
                          
                          <h2 className="text-xl font-semibold tracking-wide">{cate.subcategory_Name}</h2>
              </div>
              <p className="text-gray-100 dark:text-gray-800">{cate.description}</p>
              
            </div>

)
}
       
            </div>
                </div>
            );
};

export default ArtCraftCategory;