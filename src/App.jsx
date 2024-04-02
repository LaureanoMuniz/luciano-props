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
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
        <Header />
        <Routes />
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
        <SwiperSlide><img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Municipalidad_de_Tres_Arroyos.jpg" className="slide-image" /></SwiperSlide>
        <SwiperSlide><img src="https://c0.wallpaperflare.com/path/901/234/383/argentina-buenos-aires-9-de-julio-avenida-31d77c2f5729e6758ed2135546cc5933.jpg" className="slide-image"/></SwiperSlide>
        <SwiperSlide><img src="https://www.cronista.com/files/image/415/415792/61b14bb8c1f11.jpg" className="slide-image"/></SwiperSlide>
        
        
        </Swiper>
        <ShowCase />
        <Footer />
        
    </div>
  );
}

export default App;
