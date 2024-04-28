import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProviders";
import Swal from 'sweetalert2'


const AddCraftItem = () => {

            const{user}=useContext(AuthContext)
            console.log(user)

         const handleAddCraft=event=>{
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

       const addCraft={item,subcategory,price,rating,customization,time,status,image,shortDes,name,email}
        
        console.log(addCraft);


        fetch("http://localhost:5000/addCraft",{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(addCraft)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
           if(data.insertedId){
            form.reset()
            Swal.fire({
                title: 'success!',
                text: 'art and craft added successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
           }
            
        })

         }


            return (
                        <div> <div className="w-[80%] mx-auto p-10">
                        <form  onSubmit={handleAddCraft} >
                           <div className="grid grid-cols-2 gap-5 ">
                           <input className="rounded outline-none border-b-2 text-white focus:border-blue-500 p-2" type="text" name="item" placeholder="Item-Name" id="" />
                           <select className="rounded outline-none border-b-2 focus:border-blue-500 text-white p-2" placeholder="Subcategory-Name"  name="subcategory" id="">Subcategory-Name
                           <option disabled selected>Subcategory-Name</option>
                                <option value="Landscape Painting">Landscape Painting</option>
                                <option value="Portrait Drawing">Portrait Drawing</option>
                                <option value="Watercolour Painting">Watercolour Painting</option>
                                <option value="Oil Painting">Oil Painting</option>
                                <option value=">Charcoal Sketching">Charcoal Sketching</option>
                                <option value="Cartoon Drawing">Cartoon Drawing</option>
                               
                            </select>
                           <input className="rounded outline-none border-b-2 text-white focus:border-blue-500 p-2" type="text" name="price" placeholder="Price" id="" />
                           <input className="rounded outline-none border-b-2 text-white focus:border-blue-500 p-2" type="text" name="rating" placeholder="Rating" id="" />
                            <select className="rounded outline-none border-b-2 focus:border-blue-500 text-white p-2" placeholder="Customization" name="customization" id="">customization
                            <option disabled selected>Customization</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                               
                            </select>
                            <input className="rounded outline-none border-b-2 text-white focus:border-blue-500 p-2" type="text" name="time" placeholder="Processing-Time" id="" />

                            <select className="rounded outline-none border-b-2  focus:border-blue-500 text-white p-2" placeholder="Stock-status" name="status" id="">customization
                            <option disabled selected>Stock-status</option>
                            <option value="In stock">In stock</option>
                                <option value="Made to order">Made to order</option>

                            </select>

                            <input className="rounded outline-none border-b-2 text-white focus:border-blue-500 p-2" type="text" name="email" placeholder="User-Email" defaultValue={user?.email}  id="" />
                            <input className="rounded outline-none border-b-2 text-white focus:border-blue-500 p-2" type="text" name="name" placeholder="User-Name" defaultValue={user?.displayName} id="" />
                            <input className="rounded outline-none border-b-2 text-white focus:border-blue-500 p-2" type="text" name="image" placeholder="Image-Url" id="" />
                            <textarea className="rounded focus:border-blue-500 outline-none border-b-2  text-white col-span-2 p-2 " name="shortDes" placeholder="Short Description" id="" cols="15" rows="5"></textarea>
                            
                            <input type="submit" value="Add" className="btn btn-block col-span-2 bg-green-700 text-white" />
                            
                           </div>
                        </form>
                    </div>
                        </div>
            );
};

export default AddCraftItem;