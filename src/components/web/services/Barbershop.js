import SmallHeader from "../repeat/SmallHeader";

const Barbershop = () => {
	return (
		<div class="barber-shop" displayname="services.json5#barbershop.title" icon="scissors.svg">
			<SmallHeader title='מספרה' />
			<div class="flexible"> 
				<div class="col expand flexible x4"> 
					<div> השיער הספיק לצמוח השבוע? <br/> 
						<div class="alt-color emphasis">תאמו תור מראש </div>
						 והסתפרו בבסיס! 
					</div> 
					<icontext class="flex-end location" icon="icon-location.svg">
						<img src="/images/icon-location.b55b841e.svg" class="icon"/>
						המרכז המסחרי, המבנה הראשון 
					</icontext> 
				</div> 
				<div class="col expand flexible x4"> 
					<icontext icon="icon-time.svg">
						<img src="/images/icon-time.13cd3768.svg" class="icon"/> 
						<openinghours src="services.json5#barbershop.openingHours">
							<div>
								<div class="emphasis">א׳ - ה׳: </div>
								<div>18:45 - 08:00</div>
							</div>
							<div>
								<div class="emphasis">הפסקה: </div>
								<div>13:00 - 12:00</div>
							</div>
							<div>
								<div class="emphasis">שישי וערבי חג: </div>
								<div>12:00 - 08:00</div>
							</div>
						</openinghours> 
					</icontext> 
					<icontext class="flex-end" icon="icon-phone-black.svg">
						<img src="/images/icon-phone-black.033ad4fd.svg" class="icon"/>
						לקביעת תור: 
							<a class="link" href="tel: 972545562343"> 
								<div class="text"> 054-5562343 </div> 
							</a> 
					</icontext> 
				</div> 
				<div class="expand flexible queue x5"> 
					<div class="col expand flexible img x3"> 
						<img src="/images/brimless-hat.95e69b9a.svg"/> 
						<div class="flex-end"> 
							<div class="emphasis">חניכים:</div>
							<br/> תאמו תור  <b class="as-content"> דרך המפקד </b>
							,<br/>
							<b class="as-content">לפחות יום </b>
							 מראש 
						</div> 
					</div> 
					<div class="col expand flexible img x2"> 
						<img src="/images/cap-hat.78bee39d.svg"/> 
						<div class="flex-end"> 
							<div class="emphasis">סגל:</div>
							<br/>
							<div>קבעו תור</div>
							<b> בהתראה של יום</b> 
						</div> 
					</div> 
				</div> 
			</div> 
		</div>
	)
}

export default Barbershop
