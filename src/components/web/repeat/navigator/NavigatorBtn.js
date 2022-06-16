import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const NavigatorBtn = ({img, text, i}) => {
	let className = 'big NavigatorIcon'
	if (i === 0) {
		className = 'active NavigatorIcon'
	}

	
	// const imgElement = document.querySelector(className);
	// let changeImg = ''
	// let src = img
	// useEffect(() => {

	// 	console.log(imgElement)
	// 	let hover = ''
	// 	changeImg = () => {
	// 		console.log(1)
	// 		imgElement.src = hover
	// 		console.log(imgElement.src)
	// 	}

	// },[]);

	return (
		<a className={className} >
			<FontAwesomeIcon icon={img} className='' > </FontAwesomeIcon>
			{/*<img src={img} draggable="false"/>*/}
			<div className="hover-text">{text}</div>
		</a>
	)
}

export default NavigatorBtn
