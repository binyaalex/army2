import './Equipment.css';
import Header from "../repeat/Header";
import Clothes from "./Clothes";
// import Introduction from "./introduction/Introduction";
// import Services from "./Services";
// import Links from "./Links";

const Equipment = () => {
	return (
		<div className='military-gear page'>
			<Header header='ציוד צבאי' text='צריכים ציוד? כל הפרטים כאן כדי שתוכלו לחתום ולקבל כל ציוד שתצטרכו!' />
			<div className='content'>
				<Clothes />
			{/*<Introduction />*/}
			{/*<Services />*/}
			{/*<Links />*/}
			</div>
		</div>
	)
}

export default Equipment
