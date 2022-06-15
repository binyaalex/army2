const NavigatorBtn = ({img, text, i}) => {
	let className = 'big'
	if (i === 0) {
		className = 'active'
	}
	return (
		<a className={className} >
			<img src={img} draggable="false"/>
			<div class="hover-text">{text}</div>
		</a>
	)
}

export default NavigatorBtn
