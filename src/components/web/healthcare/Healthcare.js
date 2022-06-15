import './Healthcare.css';
import Header from "../repeat/Header";
import Navigator from "../repeat/navigator/Navigator";
import Clinic from "./Clinic";
import Medical from "./Medical";
import CallCenter from "./CallCenter";
import DoctorVisit from "./DoctorVisit";
import Gallery from "../repeat/Gallery";

import { faBriefcaseMedical } from '@fortawesome/free-solid-svg-icons'
import { faTruckMedical } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faStethoscope } from '@fortawesome/free-solid-svg-icons'

const Healthcare = () => {
	const NavigatorArr = [
		{
			img: faBriefcaseMedical,
			text: 'מרפאה',
		},
		{
			img: faTruckMedical,
			text: 'מרפ"א',
		},
		{
			img: faHeart,
			text: 'מקול הלב',
		},
		{
			img: faStethoscope,
			text: 'ביקור רופא',
		},
	]

	const imgArr = [
		'/images/710_8865.000b4723.jpg',
		'/images/750_0129.7ae763e8.jpg',
		'/images/750_0131.897d7e78.jpg',
		'/images/750_9254.0ca91f7e.jpg',
		'/images/_TIL1832.25fa8d51.jpg',
		'/images/_TIL1836.a2c5bbdf.jpg',
		'/images/_TIL1837.47be2d63.jpg',
		'/images/_TIL1856.2c4fd9a3.jpg',
		'/images/_TIL1854.1c4d3ef1.jpg',
		'/images/_TIL1861.c93045b5.jpg',
		'/images/_TIL7847.0ec0f366.jpg',
		'/images/_TIL7875.d447ff4c.jpg',
	]

	return (
		<div className='healthcare page'>
			<Header header='רפואה' text='התחלתם להרגיש לא טוב? דאגו לבריאותכם וקבעו תור למרפאה בהקדם!' />
			<navigatable>
				<div className='content'>
					<Navigator NavigatorArr={NavigatorArr} />
					<Clinic />
					<Medical />
					<CallCenter />
					<DoctorVisit />
				</div>
			</navigatable>
			<Gallery imgArr={imgArr} src='carousell/*.jpg' />
		</div>
	)
}

export default Healthcare
