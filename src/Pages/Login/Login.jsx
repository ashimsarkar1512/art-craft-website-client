import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";


const Login = () => {
            return (
                        <div className='flex mb-52 flex-col lg:flex-row '>
                        <div className='w-[80%] mx-auto lg:w-[50%] mt-16 '>
                            <h1 className="text-2xl font-bold text-center text-green-500 my-5">Log in to your account</h1>
                            <div className='w-full lg:w-[50%] mx-auto '>
                                <form  className='space-y-10'>
                                    <input className='block w-full rounded outline-none border-b-2 focus:border-orange-500 p-2' type="email" name="email" id="" placeholder='Email' />
                                    <input className='block w-full rounded outline-none border-b-2 focus:border-orange-500 p-2' type="password" name="password" id="" placeholder='Password' />
                                    <button className='btn w-full text-white bg-green-600 '>Log in</button>
                                </form>
                                < hr className='my-5' />
                              
                               
                                {
                                    
                                }
            
                            </div>
                           <div className="text-4xl flex gap-5 ml-28 lg:ml-64 md:ml-64">
                           <button  > <FcGoogle ></FcGoogle></button>
                           <button>
                           <FaGithub />
                           </button>
                           </div>
                    <h1 className="font-medium text-center mt-5">Do not have account ? <Link className="text-blue-500 font-semibold" to={'/register'}>Register</Link> </h1>
                            
                   
                        </div>
                      
                    </div>
            );
};

export default Login;