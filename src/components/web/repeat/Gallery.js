const Gallery = ({imgArr, src, titles}) => {
	return (
		<imgdisplay display="many" src={src} titles={titles} >
			<div class="images">
				{
					imgArr.map((el, i) => {
						return (
							<img src={el} />
						)
					})
				}
			</div>
			<div class="overlay">
				<div class="prev nav"></div>
				<div class="next nav"></div>
				<div class="indicators">
					{
						imgArr.map((el, i) => {
							return (
								<div class="indicator"></div>
							)
						})
					}
				</div>
			</div>
		</imgdisplay>
	)
}

export default Gallery
