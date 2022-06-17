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
					img: '/images/810_7600.1a611e6a.jpg',
					className: 'bigGallery',
				},
				{
					img: '/images/810_7673.9d834118.jpg',
					className: 'bigGallery',
				},
				{
					img: '/images/810_8731.cb7700b7.jpg',
					className: 'bigGallery',
				},
				{
					img: '/images/DSC_5575.ce0b7091.jpg',
					className: 'bigGallery',
				},
				{
					img: '/images/DSC_5656.b48532f3.jpg',
					className: 'bigGallery',
				},
				{
					img: '/images/TIL_0406.70225c2a.jpg',
					className: 'bigGallery',
				},
				{
					img: '/images/TIL_1554.0987af39.jpg',
					className: 'bigGallery',
				},
				{
					img: '/images/TIL_1576.90b487a4.jpg',
					className: 'bigGallery',
				},
				{
					img: '/images/TIL_8058.0c9aed6d.jpg',
					className: 'bigGallery',
				},
				{
					img: '/images/TIL_5305.896159ed.jpg',
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
					img: '/images/TIL_2269.668252bd.jpg',
					className: 'bigGallery',
				},
				{
					img: '/images/_TIL9725.14782c09.jpg',
					className: 'bigGallery',
				},
				{
					img: '/images/_TIL9741.59b19ec1.jpg',
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
					img: '/images/750_9589.f7eb0803.jpg',
					className: 'bigGallery',
				},
				{
					img: '/images/750_9610.042f0f6f.jpg',
					className: 'bigGallery',
				},
				{
					img: '/images/750_9620.51d80964.jpg',
					className: 'bigGallery',
				},
				{
					img: '/images/750_9621.8722fef0.jpg',
					className: 'bigGallery',
				},
				{
					img: '/images/750_9628.15ba37a2.jpg',
					className: 'bigGallery',
				},
				{
					img: '/images/750_9629.58dfc395.jpg',
					className: 'bigGallery',
				},
				{
					img: '/images/750_9631.95f7c090.jpg',
					className: 'bigGallery',
				},

				{
					img: '/images/750_9642.9ae29aeb.jpg',
					className: 'bigGallery',
				},
				{
					img: '/images/810_8460.51e7a09f.jpg',
					className: 'bigGallery',
				},
				{
					img: '/images/_TIL6996.e6c05f33.jpg',
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
					img: '/images/750_9767.3013ab9d.jpg',
					className: 'bigGallery',
				},
				{
					img: '/images/750_9787.63e50bef.jpg',
					className: 'bigGallery',
				},
				{
					img: '/images/DSC_0829.93c251a0.jpg',
					className: 'bigGallery',
				},
				{
					img: '/images/DSC_0884.21655e27.jpg',
					className: 'bigGallery',
				},
				{
					img: '/images/TIL_2368.3d32508d.jpg',
					className: 'bigGallery',
				},
				{
					img: '/images/TIL_6516.ad321ed9.jpg',
					className: 'bigGallery',
				},
				{
					img: '/images/TIL_6534.e16e0474.jpg',
					className: 'bigGallery',
				},

				{
					img: '/images/TIL_7564.8e20a556.jpg',
					className: 'bigGallery',
				},
				{
					img: '/images/_TIL7507.2f703120.jpg',
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
