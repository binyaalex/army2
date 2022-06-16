const Header = ({header, text}) => {
	return (
		<div className="header">
			<decoratedtitle decor="title-white.svg" subtitle="בעמוד זה תוכלו למצוא את דרכי ההגעה לבסיס והיציאה מהבסיס.">
				<div className="title">{header}</div>
				<img className="title-underline" src="/images/title-white.da7e0011.svg"/>
				<div className="subtitle">{text}</div>
			</decoratedtitle> 
		</div>
	)
}

export default Header
