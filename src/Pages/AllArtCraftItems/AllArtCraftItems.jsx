import { Link, useLoaderData } from "react-router-dom";


const AllArtCraftItems = () => {
          
      const loadedUser=useLoaderData();
            
            return (
                        <div className="mx-auto max-w-6xl my-10">
                              <div className="overflow-x-auto">
  <table className="table text-green-700">
    {/* head */}
    <thead>
      <tr>
       
        <th>Name</th>
        <th>Email</th>
        <th>Subcategory</th>
        <th>Item-Name</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
      loadedUser.map(user=> <tr key={user._id}>
           
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.subcategory}</td>
            <td>{user.item}</td>
            <td>{user.price}</td>
            <td><Link to={`/artCraftDetails/${user._id}`}><button className="bg-green-600 text-black p-2 rounded-md ">View details </button></Link></td>
          </tr>)
     }
      
    </tbody>
  </table>
</div>     
                        </div>
            );
};

export default AllArtCraftItems;