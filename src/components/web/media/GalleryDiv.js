import SmallHeader from "../repeat/SmallHeader";
import Gallery from "../repeat/Gallery";

const GalleryDiv = ({icon, displayname, header, imgArr, src, titles}) => {
	return (
		<div icon={icon} displayname={displayname}>
			<SmallHeader title={header} />
			<Gallery imgArr={imgArr} src={src} titles={titles} />
		</div>
	)
}

export default GalleryDiv
