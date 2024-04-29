

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';


// import required modules
import { Autoplay,  Navigation } from 'swiper/modules';


const Banner = () => {
            return (
                        <>
                          <Swiper 
                            spaceBetween={20}
                            centeredSlides={true}
                            autoplay={{
                             
                              disableOnInteraction: false,
                            }}
                           
                            navigation={true}
                            modules={[Autoplay, Navigation]}
                            className="mySwiper"
                          >
                            <div>
                           <div>
                           <SwiperSlide><img src="https://i.ibb.co/yNv6Jkc/pexels-ian-panelo-7036455.jpg" alt="" /></SwiperSlide>
                           </div>
                           
                           
                           <SwiperSlide><img src="https://i.ibb.co/8jSvGTb/maxresdefault.jpg" alt="" /></SwiperSlide>
                          
                          
                            <SwiperSlide><img src="https://i.ibb.co/zPBXHDd/pexels-steve-1045299.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide><img src="https://i.ibb.co/H7DCD7W/premium-photo-1673514503535-0ef307e0c588.jpg" alt="" /></SwiperSlide>
                           
                            </div>
                          
                           
                          </Swiper>
                        </>
                      );
                    
                    
};

export default Banner;