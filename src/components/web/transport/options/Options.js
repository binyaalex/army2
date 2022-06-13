import Shuttle from "./Shuttle";
import Public from "./Public";
import Apps from "./Apps";

const Options = () => {
	return (
		<hoverswitch className='options'>
			<Shuttle />
			<Public />
			<Apps />
		</hoverswitch>
	)
}

export default Options
