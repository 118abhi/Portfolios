import {Data} from './Data'
import './testimonial.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Testimonials() {
  return (
    <section className="testimonial section container" id='testimonial'>
        <h2 className="section__title">My Clients say</h2>
        <span className="section__subtitle">Testimoial</span>

        <Swiper className="testimonials__container mySwiper"
        loop = {true}
        grabCursor = {true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
        >
            {Data.map(({id,image,title,description})=>{
                return (
                    <SwiperSlide className="testimonial__card" key={id}>
                        <img src={image} alt="" className='testimonial__img' />

                        <h3 className="testimonial__name">{title}</h3>
                        <p className="testimonial__description">{description}</p>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </section>
  )
}
