import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProviders";


const Update = () => {
            const addCraft=useLoaderData()
            console.log(addCraft);
      const {item,subcategory,price,rating,customization,time,status,image,shortDes,name,email,_id
      }=addCraft
      const{user}=useContext(AuthContext)
      console.log(user)

   const handleUpdateCraft=event=>{
      event.preventDefault()

  const form=event.target;

  const item=form.item.value;
  const subcategory=form.subcategory.value;  
  const price=form.price.value;     
  const rating=form.rating.value;      
  const customization=form.customization.value;      
  const time=form.time.value;      
  const status=form.status.value;      
  const image=form.image.value;       
  const shortDes=form.shortDes.value; 
  const email=form.email.value; 
  const name=form.name.value; 

 const updateCraft={item,subcategory,price,rating,customization,time,status,image,shortDes,name,email,}
  
  console.log(updateCraft);

 


  fetch(`https://art-craft-crud-server.vercel.app/addCrafts/${_id}`,{
      method:'PUT',
      headers:{
          'content-type':'application/json'
      },
      body:JSON.stringify(updateCraft)
  })
  .then(res=>res.json())
  .then(data=>{
      
      console.log(data);
     if(data.modifiedCount>0){
      form.reset()
      Swal.fire({
          title: 'success!',
          text: 'art and craft updated successfully',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
     }
      
  })

   }


      return (
                  <div> <div className="w-[80%] mx-auto ">
                      <h1 className="text-3xl font-semibold
                       text-blue-700 text-center my-3">Update Craft Item :{subcategory}</h1>
                  <form  onSubmit={handleUpdateCraft} >
                     <div className="grid grid-cols-2 gap-5 ">
                     <input className="rounded outline-none border-b-2 text-green-700 focus:border-blue-500 p-2" type="text" name="item" placeholder="Item-Name" defaultValue={item}  id="" />
                     <select className="rounded outline-none border-b-2 focus:border-blue-500 text-green-700  p-2" placeholder="Subcategory-Name"  name="subcategory" defaultValue={subcategory} id="">Subcategory-Name
                     <option disabled selected>Subcategory-Name</option>
                          <option defaultValue={subcategory} value="Landscape Painting">Landscape Painting</option>
                          <option defaultValue={subcategory} value="Portrait Drawing">Portrait Drawing</option>
                          <option defaultValue={subcategory} value="Watercolour Painting">Watercolour Painting</option>
                          <option defaultValue={subcategory} value="Oil Painting">Oil Painting</option>
                          <option defaultValue={subcategory} value=">Charcoal Sketching">Charcoal Sketching</option>
                          <option defaultValue={subcategory} value="Cartoon Drawing">Cartoon Drawing</option>
                         
                      </select>
                     <input className="rounded outline-none border-b-2 text-green-700  focus:border-blue-500 p-2" type="text" name="price" placeholder="Price" defaultValue={price} id="" />
                     <input className="rounded outline-none border-b-2 text-green-700  focus:border-blue-500 p-2" type="text" name="rating" placeholder="Rating" defaultValue={rating} id="" />
                      <select className="rounded outline-none border-b-2 focus:border-blue-500 text-green-700  p-2" placeholder="Customization" name="customization" defaultValue={customization} id="">customization
                      <option disabled selected>Customization</option>
                          <option defaultValue={customization} value="Yes">Yes</option>
                          <option defaultValue={customization} value="No">No</option>
                         
                      </select>
                      <input className="rounded outline-none border-b-2 text-green-700  focus:border-blue-500 p-2" type="text" name="time" placeholder="Processing-Time" defaultValue={time}id="" />

                      <select className="rounded outline-none border-b-2  focus:border-blue-500 text-green-700  p-2" placeholder="Stock-status" name="status" defaultValue={status} id="">customization
                      <option disabled selected>Stock-status</option>
                      <option defaultValue={status} value="In stock">In stock</option>
                          <option defaultValue={status}  value="Made to order">Made to order</option>

                      </select>

                      <input className="rounded outline-none border-b-2 text-green-700  focus:border-blue-500 p-2" type="text" name="email" placeholder="User-Email" defaultValue={email}  id="" />
                      <input className="rounded outline-none border-b-2 text-green-700  focus:border-blue-500 p-2" type="text" name="name" placeholder="User-Name" defaultValue={name} id="" />
                      <input className="rounded outline-none border-b-2 text-green-700  focus:border-blue-500 p-2" type="text" name="image" placeholder="Image-Url" defaultValue={image} id="" />
                      <textarea className="rounded focus:border-blue-500 outline-none border-b-2  text-green-700  col-span-2 p-2 " name="shortDes" placeholder="Short Description" defaultValue={shortDes} id="" cols="15" rows="5"></textarea>
                      
                      <input type="submit" value="Update" className="btn btn-block col-span-2 bg-green-700 text-white" />
                      
                     </div>
                  </form>
              </div>
                  </div>
      );
};

export default Update;