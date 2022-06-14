import './Transport.css';
import Header from "../repeat/Header";
import Options from "./options/Options";
import Gallery from "../repeat/Gallery";

const Transport = () => {

	const imgArr = [
		'/images/710_8862.2a9e0f8a.jpg',
		'/images/710_8885.46500b88.jpg',
		'/images/710_8858.1e8dbd69.jpg',
		'/images/710_8887.993f1a87.jpg',
		'/images/710_8906.3700c459.jpg',
		'/images/710_8912.8f9f1ad1.jpg',
		'/images/710_מגרש הסעים.7ac14ebf.jpg',
	]

	return (
		<div className='page transport'>
			<Header header='היסעים' text='בעמוד זה תוכלו למצוא את דרכי ההגעה לבסיס והיציאה מהבסיס.' />
			<Options />
			<Gallery imgArr={imgArr} src='carousell/*.jpg' />
		</div>
	)
}

export default Transport
