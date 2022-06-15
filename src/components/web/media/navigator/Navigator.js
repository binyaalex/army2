import './Navigator.css';
import NavigatorBtn from "./NavigatorBtn";

const Navigator = () => {

	const NavigatorArr = [
		{
			img: '/images/icon-view-highlight.eae9c30e.svg',
			text: 'רחבי הקרייה',
		},
		{
			img: '/images/icon-culture.c5ae5454.svg',
			text: 'רחבי הקרייה',
		},
		{
			img: '/images/icon-shop.6744a913.svg',
			text: 'רחבי הקרייה',
		},
		{
			img: '/images/icon-weights.2c5d6e0d.svg',
			text: 'רחבי הקרייה',
		},
		{
			img: '/images/icon-weather.82955309.svg',
			text: 'רחבי הקרייה',
		},
	]

	return (
		<div class="navigator middle">
			{
				NavigatorArr.map((el, i) => {
					return (
						<NavigatorBtn 
							img={el.img}
							text={el.text}
							i={i} 
							key={i} 
						/>
					)
				})
			}
		</div>
	)
}

export default Navigator
