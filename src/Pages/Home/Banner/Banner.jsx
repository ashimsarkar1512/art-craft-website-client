

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
                            <div  className='mt-10'>
                            <SwiperSlide><img src="https://i.ibb.co/RP6N7NW/pottery-8026824-1280.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide><img src="https://i.ibb.co/FgwX1Np/fallon-michael-IP59z0-FXBu-Y-unsplash.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide><img src="https://i.ibb.co/YBVXTYK/blacksmith-2740128-1280.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide><img src="https://i.ibb.co/6ryPWNC/fishermen-8449951-1280.jpg" alt="" /></SwiperSlide>
                           
                            </div>
                          
                           
                          </Swiper>
                        </>
                      );
                    
                    
};

export default Banner;