import './Dining.css';
import Header from "../repeat/Header";
import Proclaims from "./Proclaims";
import Opening from "./opening/Opening";

const Dining = () => {
	return (
		<div className='page dining'>
			<Header header='חדר אוכל' text='רעבים? מעולה! חדרי האוכל של קריית ההדרכה מותאמים בול עבורכם ועבור התאבון שלכם!' />
			<div className='content'>
				<Proclaims />
				<Opening />
			</div>
		</div>
	)
}

export default Dining
