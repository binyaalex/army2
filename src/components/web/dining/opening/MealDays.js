import MealTime from "./MealTime";

const MealDays = ({days, time}) => {
	return (
		<div> 
			<div class="emphasis subtitle">{days}</div>
			{
				time.map((el, i) => {
					console.log(el)
					return (
						<MealTime img={el.img} text={el.text} hours={el.hours} key={i} /> 
					)
				})
			}
		</div>
	)
}

export default MealDays