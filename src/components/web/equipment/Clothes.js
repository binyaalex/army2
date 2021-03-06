import SmallHeader from "../repeat/SmallHeader";
import GallerySwiper from "../repeat/gallerySwiper/GallerySwiper";

const Clothes = () => {

	const imgArr = [
		{
			img: '/images/750_0031.c6811a09.jpg',
			className: 'poolSwiperImg',
		},
		{
			img: '/images/750_9558.5156d774.jpg',
			className: 'poolSwiperImg',
		},
		{
			img: '/images/750_0039.ef7669db.jpg',
			className: 'poolSwiperImg',
		},
		{
			img: '/images/750_9572.d3e1edaa.jpg',
			className: 'poolSwiperImg',
		},
		{
			img: '/images/750_9582.55b89606.jpg',
			className: 'poolSwiperImg',
		},
		{
			img: '/images/750_9588.253d86ed.jpg',
			className: 'poolSwiperImg',
		},
		{
			img: '/images/TIL_7577 - Copy.dea61347.jpg',
			className: 'poolSwiperImg',
		},
	]

	return (
		<div className="repository"> 
			<SmallHeader title='אפסנכל' />
			<div className="details-display flexible"> 
				<GallerySwiper imgArr={imgArr} className='mySwiper mediumGallery' />
				{/*{<imgdisplay src="repository/*.jpg"><div className="images"><img src="/images/750_9364.9f255d34.jpg"/><img src="/images/750_9387.c54eb303.jpg"/><img src="/images/750_9388.fb01f69c.jpg"/><img src="/images/750_9391.78c5b413.jpg"/></div><div className="overlay"><div className="prev nav"></div><div className="next nav"></div><div className="indicators"><div className="indicator"></div><div className="indicator"></div><div className="indicator"></div><div className="indicator"></div><div className="indicator active" ></div></div></div></imgdisplay>}*/}
				<div className="expand"> המדים לא מתאימים בול? בואו להחליף ולקבל את המידות שיתאימו לכם 
					<div className="col details flexible"> 
						<div className="flexible"> 
							<icontext className="time" icon="icon-time.svg">
								<img src="/images/icon-time.13cd3768.svg" className="icon"/> 
								<openinghours src="military-gear.json5#repositoryOpeningHours"> 
									<div>
										<div className="emphasis">א׳ - ה׳: </div>
										<div>12:45 - 08:30, 19:25 - 13:45</div>
									</div>
									<div>
										<div className="emphasis">ו׳: </div>
										<div>11:45 - 08:30</div>
									</div>
								</openinghours> 
							</icontext> 
							<icontext className="first-centered location" icon="icon-location.svg">
								<img src="/images/icon-location.b55b841e.svg" className="icon"/>
								המרכז המסחרי, קומה 2 ליד הספרייה 
							</icontext> 
						</div> 
						<div className="flexible"> 
							<icontext className="flex-end phone" icon="icon-phone-black.svg">
								<img src="/images/icon-phone-black.033ad4fd.svg" className="icon"/> 
								<a className="link" href="tel: +97273-3772730"> 
									<div className="text"> 073-3772730</div> 
								</a> 
								<div> או </div> 
								<a className="link" href="tel: +97273-3772729"> 
									<div className="text">073-3772729</div> 
								</a> 
							</icontext> 
							<img className="shirt" src="/images/shirt.26360f8c.svg"/> 
						</div> 
					</div> 
				</div> 
			</div> 
		</div>
	)
}

export default Clothes
