import './Transport.css';
import Header from "../repeat/Header";
import Options from "./options/Options";
import GallerySwiper from "../repeat/gallerySwiper/GallerySwiper";

const Transport = () => {

	const imgArr = [
		{
			img: '/images/710_8862.2a9e0f8a.jpg',
			className: 'bigGallery',
		},
		{
			img: '/images/710_8885.46500b88.jpg',
			className: 'bigGallery',
		},
		{
			img: '/images/710_8858.1e8dbd69.jpg',
			className: 'bigGallery',
		},
		{
			img: '/images/710_8887.993f1a87.jpg',
			className: 'bigGallery',
		},
		{
			img: '/images/710_8906.3700c459.jpg',
			className: 'bigGallery',
		},
		{
			img: '/images/710_8912.8f9f1ad1.jpg',
			className: 'bigGallery',
		},
		{
			img: '/images/מגרש הסעים.7ac14ebf.jpg',
			className: 'bigGallery',
		},
	]

	return (
		<div className='page transport'>
			<Header header='היסעים' text='בעמוד זה תוכלו למצוא את דרכי ההגעה לבסיס והיציאה מהבסיס.' />
			<Options />
			<GallerySwiper imgArr={imgArr} slidesPerView={3} className='bigGallery' />
		</div>
	)
}

export default Transport
