import SmallHeader from "../repeat/SmallHeader";

const Clothes = () => {
	return (
		<div class="repository"> 
			<SmallHeader title='אפסנכל' />
			<div class="details-display flexible"> 
				{/*<imgdisplay src="repository/*.jpg"><div class="images"><img src="750_9364.9f255d34.jpg"><img src="750_9387.c54eb303.jpg"><img src="750_9388.fb01f69c.jpg"><img src="750_9391.78c5b413.jpg"></div><div class="overlay"><div class="prev nav"></div><div class="next nav"></div><div class="indicators"><div class="indicator"></div><div class="indicator"></div><div class="indicator"></div><div class="indicator"></div><div class="indicator active" style="transform: translate(-4.4086vw);"></div></div></div></imgdisplay>*/}
				<div class="expand"> המדים לא מתאימים בול? בואו להחליף ולקבל את המידות שיתאימו לכם 
					<div class="col details flexible"> 
						<div class="flexible"> 
							<icontext class="time" icon="icon-time.svg">
								<img src="/images/icon-time.13cd3768.svg" class="icon"/> 
								<openinghours src="military-gear.json5#repositoryOpeningHours"> 
									<div>
										<div class="emphasis">א׳ - ה׳: </div>
										<div>12:45 - 08:30, 19:25 - 13:45</div>
									</div>
									<div>
										<div class="emphasis">ו׳: </div>
										<div>11:45 - 08:30</div>
									</div>
								</openinghours> 
							</icontext> 
							<icontext class="first-centered location" icon="icon-location.svg">
								<img src="/images/icon-location.b55b841e.svg" class="icon"/>
								המרכז המסחרי, קומה 2 ליד הספרייה 
							</icontext> 
						</div> 
						<div class="flexible"> 
							<icontext class="flex-end phone" icon="icon-phone-black.svg">
								<img src="/images/icon-phone-black.033ad4fd.svg" class="icon"/> 
								<a class="link" href="tel: +97273-3772730"> 
									<div class="text"> 073-3772730</div> 
								</a> 
								<div> או </div> 
								<a class="link" href="tel: +97273-3772729"> 
									<div class="text">073-3772729</div> 
								</a> 
							</icontext> 
							<img class="shirt" src="/images/shirt.26360f8c.svg"/> 
						</div> 
					</div> 
				</div> 
			</div> 
		</div>
	)
}

export default Clothes
