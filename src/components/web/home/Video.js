const Video = () => {
	return (
		<div className="video-display">
		 	<div className="blur overlay"></div>
	 		<div className="overlay">
	  			<div className="begin text">
	   				<div className="title"> קריית ההדרכה </div>
	    			של צה"ל בנגב 
	  			</div>
	  			<div class="play">
	   				{/*<img src="/images/play.33536b41.svg" /> */}
					<video src="/images/tickets-hotline.aee51c34.mp4" class="expand" controls="" poster="/images/tickets-hotline.4d5d4a5c.png" preload="none" type="video/mp4" controls></video>
	  			</div> 
	 		</div> 
		</div>
	)
}

export default Video
