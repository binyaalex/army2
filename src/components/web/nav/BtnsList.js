import Btn from './Btn'

const BtnsList = () => {

	const btnsListArr = [
		{
			link: '/web/page/home',
			text: 'קריית ההדרכה '
		},
		{
			link: '/web/page/transport',
			text: 'היסעים'
		},
		{
			link: '/web/page/dining',
			text: 'חדר אוכל'
		},
		{
			link: '#',
			text: 'המרכז המסחרי'
		},
		{
			link: '/web/page/recreation-and-fitness',
			text: 'פנאי וכושר'
		},
		{
			link: '/web/page/services',
			text: 'שירותים כלליים'
		},
		{
			link: '/web/page/military-gear',
			text: 'ציוד צבאי'
		},
		{
			link: '/web/page/healthcare',
			text: 'רפואה'
		},
		{
			link: '/web/page/media',
			text: 'מדיה'
		},
	]

	return (
		<div className='navBtnsList'>
			{
				btnsListArr.map((el, i) => {
					return (
						<Btn
							link={el.link}
							text={el.text}
							key={i}
						/> 
					)
				})
			}
		</div>
	)
}

export default BtnsList