import './Dining.css';
import Header from "../repeat/Header";
import Proclaims from "./Proclaims";
import Opening from "./opening/Opening";
import ExtraFood from "./extraFood/ExtraFood";
import GallerySwiper from "../repeat/gallerySwiper/GallerySwiper";

const Dining = () => {

	const imgArr = [
		{
			img: '/images/750_0031.c6811a09.jpg',
			className: 'bigGallery',
		},
		{
			img: '/images/750_9558.5156d774.jpg',
			className: 'bigGallery',
		},
		{
			img: '/images/750_0039.ef7669db.jpg',
			className: 'bigGallery',
		},
		{
			img: '/images/750_9572.d3e1edaa.jpg',
			className: 'bigGallery',
		},
		{
			img: '/images/750_9582.55b89606.jpg',
			className: 'bigGallery',
		},
		{
			img: '/images/750_9588.253d86ed.jpg',
			className: 'bigGallery',
		},
		{
			img: '/images/TIL_7577 - Copy.dea61347.jpg',
			className: 'bigGallery',
		},
	]

	return (
		<div className='page dining'>
			<Header header='חדר אוכל' text='רעבים? מעולה! חדרי האוכל של קריית ההדרכה מותאמים בול עבורכם ועבור התאבון שלכם!' />
			<div className='content'>
				<Proclaims />
				<Opening />
				<ExtraFood />
			</div>
			<GallerySwiper imgArr={imgArr} slidesPerView={3} className='mySwiper bigGallery' />
		</div>
	)
}

export default Dining
