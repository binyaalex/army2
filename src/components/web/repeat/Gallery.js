const Gallery = ({imgArr, src, titles}) => {
	return (
		<imgdisplay display="many" src={src} titles={titles} >
			<div className="images">
				{
					imgArr.map((el, i) => {
						return (
							<img src={el} key={i} />
						)
					})
				}
			</div>
			<div className="overlay">
				<div className="prev nav"></div>
				<div className="next nav"></div>
				<div className="indicators">
					{
						imgArr.map((el, i) => {
							return (
								<div className="indicator" key={i} ></div>
							)
						})
					}
				</div>
			</div>
		</imgdisplay>
	)
}

export default Gallery
