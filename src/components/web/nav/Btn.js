import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom"

const Btn = ({text, link}) => {

	const url = useNavigate()
	const [className, setclassName] = useState('navBtn');

	useEffect(() => {
		const index = document.querySelector('.navBtn').baseURI.lastIndexOf('/')
		const page = document.querySelector('.navBtn').baseURI.slice(index+1)
		if (page === link) {
			setclassName('navBtn thisPage')
		} else {
			setclassName('navBtn')
		}
	},[url]);

	return (
		<div className='navBtnDiv'>
			<Link to={link} className={className} >{text}</Link>
		</div>
	)
}

export default Btn