import React from 'react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import styles from './Carousel.module.css'
import 'swiper/css/navigation'
import { SwiperSlide,Swiper } from 'swiper/react'
import LeftNavButton from '../NavBtn/LeftNavButton'
import RightNavButton from '../NavBtn/RightNavButton'

const Carousel = ({items,renderItem,uniqueNavigationKey}) => {
  const prevClass = `.custom_prev_${uniqueNavigationKey}`
  const nextClass = `.custom_next_${uniqueNavigationKey}`
  return (
    <div className={styles.carouse_wrapper}>
        <Swiper
        modules={[Navigation]}
        navigation={{
            nextEl:nextClass,
            prevEl:prevClass
        }}
        breakpoints={{
            320:{slidesPerView:2},
            768:{slidesPerView:4},
            1024:{slidesPerView:7}
        }}
        spaceBetween={40}
        >
        {items.map((item)=>(
            <SwiperSlide key={item.id}>{renderItem(item)}</SwiperSlide>
        ))}
        </Swiper>
        <LeftNavButton className={`custom_prev_${uniqueNavigationKey}`}/>
        <RightNavButton className={`custom_next_${uniqueNavigationKey}`}/>
    </div>
  )
}

export default Carousel