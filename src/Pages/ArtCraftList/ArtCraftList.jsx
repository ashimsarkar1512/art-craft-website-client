import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProviders";
import { Link } from "react-router-dom";


const ArtCraftList = () => {
                    
              const{user}=useContext(AuthContext) || {}
              console.log(user);

              const [items,setItems]=useState([])

            useEffect(()=>{
                        fetch(`http://localhost:5000/addCraft/${user.email}`)
                        .then(res=>res.json())
                        .then(data=>{
                                    setItems(data);
                        })
            },[user])

            return (
                        <div  className="
                        grid grid-cols-1 bg-gray-100 md:grid-cols-3 p-7 gap-10">
                               {
                                    items?.map(item=>(
                                                <div key={item._id} className="card  bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img  src={item.image} alt="Shoes" className="h-[250px]" />
  </figure>
  <div className="card-body items-center text-center text-blue-500 ">
    <h2 className="card-title">{item.item}</h2>
    <div className="flex gap-10 my-2">
            <p> price : {item.price}</p>
            <p>Rating : {item.rating}</p>
    </div>
    <div  className="flex gap-10 mb-2" >
           <p> customization: {item.customization}</p>
           <p> status: {item.status}</p>
    </div>
    <div className="flex gap-10 ">
            <button className="bg-red-800 text-black py-2 px-4 rounded-md">Delete</button>
           <Link to='/update'> <button className="bg-green-700 text-black py-2 px-3 rounded-md">Update</button></Link>
    </div>
    
  </div>
</div>
                                    ))
                               }
                        </div>
            );
};

export default ArtCraftList;