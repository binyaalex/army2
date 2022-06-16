import './Equipment.css';
import Header from "../repeat/Header";
import Clothes from "./Clothes";
import Laundry from "./Laundry";
import Armoury from "./Armoury";
// import Introduction from "./introduction/Introduction";

const Equipment = () => {
	return (
		<div className='military-gear page'>
			<Header header='ציוד צבאי' text='צריכים ציוד? כל הפרטים כאן כדי שתוכלו לחתום ולקבל כל ציוד שתצטרכו!' />
			<div className='content'>
				<Clothes />
				<Laundry />
				<Armoury />
			{/*<Introduction />*/}
			</div>
		</div>
	)
}

export default Equipment
