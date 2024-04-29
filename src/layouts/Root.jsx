import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";


const Root = () => {
            return (
                        <div>
                                    <div className="h-20">
                                    <Navbar></Navbar>
                                    </div>
                               <Outlet></Outlet> 
                               <Footer></Footer>    
                        </div>
            );
};

export default Root;