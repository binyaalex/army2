const Header = ({header, text}) => {
	return (
		<div class="header">
			<decoratedtitle decor="title-white.svg" subtitle="בעמוד זה תוכלו למצוא את דרכי ההגעה לבסיס והיציאה מהבסיס.">
				<div class="title">{header}</div>
				<img class="title-underline" src="/images/title-white.da7e0011.svg"/>
				<div class="subtitle">{text}</div>
			</decoratedtitle> 
		</div>
	)
}

export default Header
