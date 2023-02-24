import React from 'react'
import Image from 'next/image';
import { Navigation, Pagination, Scrollbar, A11y, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Testimonials() {
    const testimonial = [
        {
            message: "Need a short description for 'Stage 1' here filer ffiler ffiler ffiler ffiler ffiler ffiler ffiler ffiler ffiler ffiler ffiler ffiler ffilerfiler ffiler ffiler ffiler ffiler ffiler ffiler ffiler ffiler ffiler ffiler ffiler ffiler ffiler ffiler ffiler ffiler ffiler ffiler f f",
            stage: "1",
            link: "/"
        },
        {
            message: "Need a short description for 'Stage 1' here filer ffiler ffiler ffiler ffiler ffiler ffiler ffiler ffiler ffiler ffiler ffiler ffiler ffilerfiler ffiler ffiler ffiler ffiler ffiler ffiler ffiler ffiler ffiler ffiler ffiler ffiler ffiler ffiler ffiler ffiler ffiler ffiler f f",
            stage: "2",
            link: "/"
        },
        {
            message: "Need a short description for 'Stage 1' here filer ffiler ffiler ffiler ffiler ffiler ffiler ffiler ffiler ffiler ffiler ffiler ffiler ffilerfiler ffiler ffiler ffiler ffiler ffiler ffiler ffiler ffiler ffiler ffiler ffiler ffiler ffiler ffiler ffiler ffiler ffiler ffiler f f",
            stage: "3",
            link: "/"
        }
    ]
    return (
        <>
            {/* <!-- TESTIMONIAL START  --> */}
            <div className="testimonial-area  bg1 pt-20">
                <div className="testimonial_shape">
                    <img className="t-1" src="/img/shape/shape8.png" alt="shape" />
                    <img className="t-2" src="/img/shape/shape2.png" alt="shape" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="section-wrapper">
                                <h2 className="section-title">Roadmap: Journey of Art</h2>
                            </div>
                        </div>
                    </div>
                     <Swiper
                            // install Swiper modules
                            modules={[Navigation, Pagination, Scrollbar, A11y,]}
                            spaceBetween={20}
                            slidesPerView={1}
                            autoplaydisableoninteraction={"false"}
                            loop={true}
                            className="tp-dot-style"
                            pagination={{ clickable: true }}
                            breakpoints={{

                                // when window width is >= 768px
                                768: {
                                    slidesPerView: 2,
                                },
                                992: {
                                    // when window width is >= 992px
                                    slidesPerView: 3,
                                }
                            }}
                        // navigation={{ clickable: true }}
                        // scrollbar={{ draggable: true }}
                        // onSwiper={(swiper) => console.log(swiper)}
                        // onSlideChange={() => console.log('slide change')}
                        >
                            {testimonial.map((item, i) => (
                                <SwiperSlide key={i}>
                                        <div className="testimonial-item pt-55">
                                            <div className="item">
                                                <p>{item.message}</p>
                                                <div className="flex flex-row justify-between pt-10">
                                                    <div className="font-extrabold text-xl text-black ">
                                                        Stage: {item.stage}
                                                    </div>
                                                    <div className="text black font-normal text-xl">
                                                        <a href={item.link}><span>Read More</span></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </SwiperSlide>
                            ))}

                        </Swiper>                        
                </div>
            </div>
            {/* <!-- TESTIMONIAL END --> */}

        </>
    )
}
