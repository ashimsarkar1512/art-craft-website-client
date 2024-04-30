import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProviders";
import { Link,  } from "react-router-dom";
import Swal from "sweetalert2";


const ArtCraftList = () => {
                    
              const{user}=useContext(AuthContext) || {}
              console.log(user);

              const [items,setItems]=useState([])

             
              
            useEffect(()=>{
                        fetch(`https://art-craft-crud-server.vercel.app/addCraft/${user?.email}`)
                        .then(res=>res.json())
                        .then(data=>{
                                    setItems(data);
                        })
            },[user])

            

            const handleDelete=id=>{


              Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
              }).then((result) => {
                if (result.isConfirmed) {
                  fetch(`https://art-craft-crud-server.vercel.app/addCraft/${id}`,{

                  method:'DELETE'

                  })
                  .then(res=>res.json())
                  .then(data=>{
                      if(data.deletedCount>0){
                        Swal.fire({
                          title: "Deleted!",
                          text: "Your file has been deleted.",
                          icon: "success"
                        });
                }
              });
                    

                                    const remainingUsers=items.filter(user=>user._id !==id)
                                    setItems(remainingUsers)
                        }
                    })
            }

            return (
                      <div>
                        <div className=" mx-auto flex justify-center my-5">
                        <select className="rounded outline-none border-b-2 focus:border-blue-500 text-green-700  p-2" placeholder="Customization" name="customization" id="">customization
                            <option disabled selected >Customization</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                               
                            </select>
                        </div>
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
            <button onClick={()=>handleDelete(item._id)} className="bg-red-800 text-black py-2 px-4 rounded-md">Delete</button>
           <Link to={`/update/${item._id}`}> <button className="bg-green-700 text-black py-2 px-3 rounded-md">Update</button></Link>
    </div>
    
  </div>
</div>
                                    ))
                               }
                        </div>
                      </div>
            );
};

export default ArtCraftList;