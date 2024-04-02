import React from "react";
import Header from "./components/Header";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ShowCase from './components/ShowCase' 


function App() {
  return (
    <div className="App">
        <Header/>

        <Routes>  
        </Routes>

        
        <Swiper
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: false,
        }}
        navigation={false}
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://fotos.perfil.com/2021/04/23/trim/960/540/0423tres-arroyos-1162731.jpg?format=webp" className="slide-image" /></SwiperSlide>
        <SwiperSlide><img src="https://c0.wallpaperflare.com/path/901/234/383/argentina-buenos-aires-9-de-julio-avenida-31d77c2f5729e6758ed2135546cc5933.jpg" className="slide-image"/></SwiperSlide>
        <SwiperSlide><img src="https://c.animaapp.com/w56YXEhf/img/frame-2.png" className="slide-image"/></SwiperSlide>
        
        
      </Swiper>
        <ShowCase />
        
        
    </div>
  );
}

export default App;
