import SmallHeader from "../repeat/SmallHeader";

const Faults = () => {
	return (
		<div className="tickets" displayname="services.json5#ticketsTitle" icon="tickets.svg"> 
			<div className="flexible"> 
				<div className="col flexible"> 
					<SmallHeader title='תקלות' />
					{/*<decoratedtitle><div className="title">תקלות</div><img className="title-underline" src="title-black.07ae5174.svg"></decoratedtitle> */}
					<div>נתקלתם בתקלה? התקשרו מיד למוקד הזכיין ופתחו קריאה!</div> 
					<icontext className="first-centered flex-end" icon="icon-phone-black.svg">
						<img src="/images/icon-phone-black.033ad4fd.svg" className="icon"/> 
						<div> בטלפון הצבאי: 2000<br/>
						 בטלפון אזרחי: 
						 	<a className="link" href="tel: +972733772000"> 
						 		<div className="text">073-3772000</div> 
						 	</a> 
						</div> 
					</icontext> 
				</div> 
				<div className="expand flexible img"> 
					<imgdisplay src="tickets.jpg" className="expand">
						<div className="images">
							<img src="/images/tickets.36602eef.jpg"/>
						</div>
						<div className="overlay">
						</div>
					</imgdisplay> 
					<video src="/images/tickets-hotline.aee51c34.mp4" className="expand" controls="" poster="/images/tickets-hotline.4d5d4a5c.png" preload="none" type="video/mp4" controls></video>
				</div> 
			</div> 
		</div>
	)
}

export default Faults
