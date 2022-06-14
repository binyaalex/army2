import './Dining.css';
import Header from "../repeat/Header";
// import Options from "./options/Options";
import Proclaims from "./Proclaims";

const Dining = () => {
	return (
		<div className='page dining'>
			<Header header='חדר אוכל' text='רעבים? מעולה! חדרי האוכל של קריית ההדרכה מותאמים בול עבורכם ועבור התאבון שלכם!' />
			<div className='content'>
			<Proclaims />
			{/*<Gallery />*/}
			</div>
		</div>
	)
}

export default Dining
