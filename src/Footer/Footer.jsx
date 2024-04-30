import { FaGoogle, FaTwitter,  } from "react-icons/fa6";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
const Footer = () => {
            return (
                        <div>
                               <footer className="footer p-10 bg-teal-950 text-neutral-content">
  <nav>
    <header className="footer-title">Services</header> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
  <nav >
    <header className="footer-title">social</header> 
   <div className="flex">
   <Player
  autoplay
  loop
  src="https://lottie.host/c09b3521-c440-4c16-a677-48255b37fe49/B4QAyvNJfO.json"
  style={{ height: '70px', width: '100px' }}
>
  
</Player>
   <Player
  autoplay
  loop
  src="https://lottie.host/828847c1-bd73-4f69-99b0-bef7cc04afd5/PRW7a6GICs.json"
  style={{ height: '70px', width: '100px' }}
>
  
</Player>
   <Player
  autoplay
  loop
  src="https://lottie.host/48a29879-2d73-4351-b035-f57af32be40d/fOkcr0j3Km.json"
  style={{ height: '70px', width: '100px' }}
>
  
</Player>
    
   </div>
  </nav>
</footer>     
                        </div>
            );
};

export default Footer;