const Welcome = () => {
	return (
		<div className="welcome-greet">
			<div className="title">ברוכים הבאים</div>
			<div className="subtitle">לאתר קריית ההדרכה!</div> 
			<div className="text">באתר תוכלו למצוא את כל המידע הנחוץ על המרחב הציבורי של הקרייה, <br/> בבה”דים, שירותים כלליים ושירותי פנאי, המרכז המסחרי ועוד. </div>
			<a href="#media" className="button link media">
				למדיה 
				<img className="icon" src="/images/media.c4d78bfe.svg" /> 
			</a>
		</div>
	)
}

export default Welcome
