import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from 'swiper'

import 'swiper/scss'
import {swiper1Data} from "../data/swiper1Data";

const Section4 = () => {
    return (
        <section className='company-info__section'>
            <div className='container'>
                <div className='company-inf__body'>
                    <div className='slider-block'>
                        <h1 className='company-info__title-hidden'>Многоквартирные <span>жилые дома</span></h1>
                        <Swiper
                            className='swiper1'
                            slidesPerView={1}
                            spaceBetween={0}
                            loop={true}
                            modules={[Navigation]}
                            navigation={{
                                prevEl: '.swiper1-btn-prev',
                                nextEl: '.swiper1-btn-next',
                            }}
                        >
                            {
                                swiper1Data.map((slide, ind) => (
                                    <SwiperSlide key={ind} className='swiper1-slide'>
                                        <img src={slide.img} alt=""/>
                                    </SwiperSlide>
                                ))
                            }
                            <div className='swiper1-btns__group'>
                                <button className='swiper1-btn-prev swiper1-control'><img src="./assets/images/swiperNext.png" alt=""/></button>
                                <button className='swiper1-btn-next swiper1-control'><img src="./assets/images/swiperNext.png" alt=""/></button>
                            </div>
                        </Swiper>
                    </div>
                    <div className='company-info__block'>
                        <h1 className='company-info__title'>Многоквартирные <span>жилые дома</span></h1>
                        <p className='company-info__text'>
                            К общему имуществу дома относят помещения общего пользования всеми владельцами квартир. На основании договора, который заключается со всеми жильцами, дом обслуживается организацией или частным предпринимателем. В обязанности его входит обеспечение ремонтов, уборки придомовой территории.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section4