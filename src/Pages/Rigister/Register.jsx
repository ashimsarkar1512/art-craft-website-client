import { Link } from "react-router-dom";

const Register = () => {
            return (
                       
        <div className='flex mb-28 flex-col lg:flex-row'>
        <div className='w-[80%] mx-auto lg:w-[50%] mt-16 '>
            <h1 className="text-2xl font-bold text-center text-green-500 my-5">Register your account</h1>
            <div className='w-full lg:w-[50%] mx-auto '>
                <form className='space-y-5'>
                    <input className='block w-full rounded outline-none border-b-2 focus:border-orange-500 p-2' type="text" name="name" id="" placeholder='Name' required />
                    <input className='block w-full rounded outline-none border-b-2 focus:border-orange-500 p-2' type="email" name="email" id="" placeholder='Email' required />
                    <input className='block w-full rounded outline-none border-b-2 focus:border-orange-500 p-2' type="password" name="password" id="" placeholder='Password' required />
                    <input className='block w-full rounded outline-none border-b-2 focus:border-orange-500 p-2' type="text" name="photoURL" id="" placeholder='Profile Picture URL' required />
                    <button className='btn w-full text-white bg-green-500 '>Register</button>
                </form>
                </div>
                <h1 className="font-medium text-center mt-3">Do not have account ? <Link className="text-blue-500 font-semibold" to={'/login'}>log In</Link> </h1>
                {
                   
                }
        </div>
       
    </div>
            );
};

export default Register;