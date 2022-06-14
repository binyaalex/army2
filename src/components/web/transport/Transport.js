import './Transport.css';
import Header from "../repeat/Header";
import Options from "./options/Options";
import Gallery from "./Gallery";

const Transport = () => {
	return (
		<div className='page transport'>
			<Header header='היסעים' text='בעמוד זה תוכלו למצוא את דרכי ההגעה לבסיס והיציאה מהבסיס.' />
			<Options />
			<Gallery />
		</div>
	)
}

export default Transport
