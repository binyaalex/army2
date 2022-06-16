const SmallHeader = ({title, text}) => {
	return (
		<decoratedtitle>
			<div className="title">{title}</div>
			<img className="title-underline" src="/images/title-black.07ae5174.svg"/>
			<div className="subtitle">{text}</div>
		</decoratedtitle> 
	)
}

export default SmallHeader
