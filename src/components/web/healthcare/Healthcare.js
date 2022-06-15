import './Healthcare.css';
import Header from "../repeat/Header";
import Navigator from "../repeat/navigator/Navigator";
import Clinic from "./Clinic";
import Medical from "./Medical";
// import Introduction from "./introduction/Introduction";
// import Links from "./Links";

const Healthcare = () => {
	const NavigatorArr = [
		{
			img: '/images/medkit-highlight.3a2b7234.svg',
			text: 'מרפאה',
		},
		{
			img: '/images/medical-centre.629be216.svg',
			text: 'מרפ"א',
		},
		{
			img: '/images/medical-call-centre.124a4787.svg',
			text: 'מקול הלב',
		},
		{
			img: '/images/doctor-visits.13c60dd4.svg',
			text: 'ביקור רופא',
		},
	]

	return (
		<div className='healthcare page'>
			<Header header='רפואה' text='התחלתם להרגיש לא טוב? דאגו לבריאותכם וקבעו תור למרפאה בהקדם!' />
			<navigatable>
				<div className='content'>
					<Navigator NavigatorArr={NavigatorArr} />
						<Clinic />
						<Medical />
			{/*<Introduction />*/}
			{/*<Links />*/}
				</div>
			</navigatable>
		</div>
	)
}

export default Healthcare
