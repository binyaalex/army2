import './Services.css';
import Header from "../repeat/Header";
import Barbershop from "./Barbershop";
import Faults from "./Faults";
import Religion from "./Religion";
import Navigator from "../repeat/navigator/Navigator";

const Services = () => {

	const NavigatorArr = [
		{
			img: '/images/scissors-highlight.bd894641.svg',
			text: 'מספרה',
		},
		{
			img: '/images/tickets.a7b87c29.svg',
			text: 'תקלות',
		},
		{
			img: '/images/religion.9cc2484c.svg',
			text: 'רבנות',
		},
	]

	return (
		<div className='services page'>
			<Header header='שירותים כלליים' text='משהו התקלקל? צריכים להסתפר? אולי להתייעץ עם הרב? כל הפרטים כאן!' />
			<navigatable>
				<div className='content'>
					<Navigator NavigatorArr={NavigatorArr} />
					<Barbershop />
					<Faults />
					<Religion />
				</div>
			</navigatable>
		</div>
	)
}

export default Services
