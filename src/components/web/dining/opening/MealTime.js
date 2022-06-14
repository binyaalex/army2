const MealTime = ({img, text, hours}) => {
	return (
		<div>
			<img class="time" src={img}/> 
			<b>{text}</b>: 
			<openinghours type="hours" src="dining.json5#openingHours.0.0">
				<div>
					<div>{hours}</div>
				</div>
			</openinghours>
		</div>
	)
}

export default MealTime
