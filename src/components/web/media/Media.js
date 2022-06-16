import './Media.css';
import Header from "../repeat/Header";
import GalleryDiv from "./GalleryDiv";
import Navigator from "../repeat/navigator/Navigator";

import { faTreeCity } from '@fortawesome/free-solid-svg-icons'
import { faMasksTheater } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import { faBed } from '@fortawesome/free-solid-svg-icons'

const Media = () => {

	const mediaArr = [
		{
			header: `רחבי הקריה`,
			icon: 'icon-view.svg',
			displayname: 'media.json5#view.title',
			src: 'culture/*.jpg, library-carousell/*.jpg',
			titles: 'media.json5#culture.imageTitles',
			imgArr: [
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
		},
		{
			header: `תרבות`,
			icon: 'icon-view.svg',
			displayname: 'media.json5#view.title',
			src: 'culture/*.jpg, library-carousell/*.jpg',
			titles: 'media.json5#culture.imageTitles',
			imgArr: [
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
		},
		{
			header: `מרכז מסחרי`,
			icon: 'icon-view.svg',
			displayname: 'media.json5#view.title',
			src: 'culture/*.jpg, library-carousell/*.jpg',
			titles: 'media.json5#culture.imageTitles',
			imgArr: [
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
		},
		{
			header: `כושר`,
			icon: 'icon-view.svg',
			displayname: 'media.json5#view.title',
			src: 'culture/*.jpg, library-carousell/*.jpg',
			titles: 'media.json5#culture.imageTitles',
			imgArr: [
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
		},
		{
			header: `מגורים`,
			icon: 'icon-view.svg',
			displayname: 'media.json5#view.title',
			src: 'culture/*.jpg, library-carousell/*.jpg',
			titles: 'media.json5#culture.imageTitles',
			imgArr: [
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
		},
	]

	const NavigatorArr = [
		{
			img: faTreeCity,
			text: 'רחבי הקרייה',
		},
		{
			img: faMasksTheater,
			text: 'רחבי הקרייה',
		},
		{
			img: faCartShopping,
			text: 'רחבי הקרייה',
		},
		{
			img: faDumbbell,
			text: 'רחבי הקרייה',
		},
		{
			img: faBed,
			text: 'רחבי הקרייה',
		},
	]

	return (
		<div className='media page'>
			<Header header='מדיה' text='תמונות של הקריה, נופים, מתקנים, אטרקציות וכו’.' />
			<navigatable>
				<div className='content'>
					<Navigator NavigatorArr={NavigatorArr} />
					{
						mediaArr.map((el, i) => {
							return (
								<GalleryDiv 
									header={el.header}
									icon={el.icon}
									displayname={el.displayname}
									src={el.src}
									titles={el.titles}
									imgArr={el.imgArr}
									key={i}
								/>
							)
						})
					}
				</div>
			</navigatable>
		</div>
	)
}

export default Media
