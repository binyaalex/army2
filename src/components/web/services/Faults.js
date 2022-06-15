import SmallHeader from "../repeat/SmallHeader";

const Faults = () => {
	return (
		<div class="tickets" displayname="services.json5#ticketsTitle" icon="tickets.svg"> 
			<div class="flexible"> 
				<div class="col flexible"> 
					<SmallHeader title='תקלות' />
					{/*<decoratedtitle><div class="title">תקלות</div><img class="title-underline" src="title-black.07ae5174.svg"></decoratedtitle> */}
					<div>נתקלתם בתקלה? התקשרו מיד למוקד הזכיין ופתחו קריאה!</div> 
					<icontext class="first-centered flex-end" icon="icon-phone-black.svg">
						<img src="/images/icon-phone-black.033ad4fd.svg" class="icon"/> 
						<div> בטלפון הצבאי: 2000<br/>
						 בטלפון אזרחי: 
						 	<a class="link" href="tel: +972733772000"> 
						 		<div class="text">073-3772000</div> 
						 	</a> 
						</div> 
					</icontext> 
				</div> 
				<div class="expand flexible img"> 
					<imgdisplay src="tickets.jpg" class="expand">
						<div class="images">
							<img src="/images/tickets.36602eef.jpg"/>
						</div>
						<div class="overlay">
						</div>
					</imgdisplay> 
					<video src="/images/tickets-hotline.aee51c34.mp4" class="expand" controls="" poster="/images/tickets-hotline.4d5d4a5c.png" preload="none" type="video/mp4" controls></video>
				</div> 
			</div> 
		</div>
	)
}

export default Faults
