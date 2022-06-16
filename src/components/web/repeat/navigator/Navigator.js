import './Navigator.css';
import NavigatorBtn from "./NavigatorBtn";

const Navigator = ({NavigatorArr}) => {

	return (
		<div className="navigator middle">
			{
				NavigatorArr.map((el, i) => {
					return (
						<NavigatorBtn 
							img={el.img}
							text={el.text}
							i={i} 
							key={i} 
						/>
					)
				})
			}
		</div>
	)
}

export default Navigator
