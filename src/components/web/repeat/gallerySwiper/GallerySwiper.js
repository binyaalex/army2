import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "./GallerySwiper.css";
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const GallerySwiper = ({imgArr, slidesPerView, className}) => {
	return (
		<div className='swiperDiv'>
			<Swiper
	          spaceBetween={30}
	          slidesPerView={slidesPerView}
	          pagination={{
	            clickable: true,
	          }}
	          modules={[Pagination]}
	          className={className}
	        >
	        	{
					imgArr.map((el, i) => {
						return (
							<SwiperSlide>
					            <img src={el.img} className={el.className} />
					        </SwiperSlide>
						)
					})
				}
	        </Swiper>
		</div>
	)
}

export default GallerySwiper
