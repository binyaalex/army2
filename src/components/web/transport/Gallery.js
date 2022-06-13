const Gallery = () => {
	return (
		<imgdisplay display="many" src="/images/carousell/*.jpg">
			<div class="images">
				<img src="/images/710_8862.2a9e0f8a.jpg"/>
				<img src="/images/710_8885.46500b88.jpg"/>
				<img src="/images/710_8858.1e8dbd69.jpg"/>
				<img src="/images/710_8887.993f1a87.jpg"/>
				<img src="/images/710_8906.3700c459.jpg"/>
				<img src="/images/710_8912.8f9f1ad1.jpg"/>
				<img src="/images/מגרש הסעים.7ac14ebf.jpg"/>
			</div>
			<div class="overlay">
				<div class="prev nav"></div>
				<div class="next nav"></div>
				<div class="indicators">
					<div class="indicator"></div>
					<div class="indicator"></div>
					<div class="indicator"></div>
					<div class="indicator"></div>
					<div class="indicator"></div>
					<div class="indicator"></div>
					<div class="indicator"></div>
					<div class="indicator active" style={{transform: "translate(-3.49947vw)"}}></div>
				</div>
			</div>
		</imgdisplay>
	)
}

export default Gallery
