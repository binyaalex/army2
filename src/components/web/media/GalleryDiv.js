import SmallHeader from "../repeat/SmallHeader";
import GallerySwiper from "../repeat/gallerySwiper/GallerySwiper";

const GalleryDiv = ({icon, displayname, header, imgArr, src, titles}) => {
	return (
		<div icon={icon} displayname={displayname}>
			<SmallHeader title={header} />
			<GallerySwiper imgArr={imgArr} slidesPerView={3} className='bigGallery' />
		</div>
	)
}

export default GalleryDiv
