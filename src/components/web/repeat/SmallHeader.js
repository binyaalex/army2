const SmallHeader = ({title, text}) => {
	return (
		<decoratedtitle>
			<div class="title">{title}</div>
			<img class="title-underline" src="/images/title-black.07ae5174.svg"/>
			<div class="subtitle">{text}</div>
		</decoratedtitle> 
	)
}

export default SmallHeader
