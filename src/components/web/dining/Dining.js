import './Dining.css';
import Header from "../repeat/Header";
import Proclaims from "./Proclaims";
import Opening from "./opening/Opening";
import ExtraFood from "./extraFood/ExtraFood";
import Gallery from "../repeat/Gallery";

const Dining = () => {

	const imgArr = [
		'/images/750_0031.c6811a09.jpg',
		'/images/750_9558.5156d774.jpg',
		'/images/750_0039.ef7669db.jpg',
		'/images/750_9572.d3e1edaa.jpg',
		'/images/750_9582.55b89606.jpg',
		'/images/750_9588.253d86ed.jpg',
		'/images/TIL_7577 - Copy.dea61347.jpg',
	]

	return (
		<div className='page dining'>
			<Header header='חדר אוכל' text='רעבים? מעולה! חדרי האוכל של קריית ההדרכה מותאמים בול עבורכם ועבור התאבון שלכם!' />
			<div className='content'>
				<Proclaims />
				<Opening />
				<ExtraFood />
			</div>
			<Gallery imgArr={imgArr} />
		</div>
	)
}

export default Dining
