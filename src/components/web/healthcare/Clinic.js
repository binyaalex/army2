import SmallHeader from "../repeat/SmallHeader";

const Clinic = () => {
	return (
		<div class="clinic" displayname="healthcare.json5#clinicTitle" icon="medkit.svg"> 
			<SmallHeader title='מרפאה' text='' />
			<div class="flexible pack"> 
				<div class="col flexible"> 
					<icontext icon="icon-time.svg">
						<img src="/images/icon-time.13cd3768.svg" class="icon"/> 
						<div> 
							<openinghours src="healthcare.json5#openingHours">
								<div>
									<div class="emphasis">א׳ - ה׳: </div>
									<div>17:30 - 08:00</div>
								</div>
								<div>
									<div class="emphasis">הפסקה: </div>
									<div>13:00 - 12:00</div>
								</div>
							</openinghours> 
							<div class="alt-color emphasis flex-end">מיום שישי עד ראשון ב-8:00 בבוקר ינתן מענה לפניות דחופות בלבד.</div> 
						</div> 
					</icontext> 
				</div> 
				<icontext icon="icon-phone-black.svg">
					<img src="/images/icon-phone-black.033ad4fd.svg" class="icon"/>
					 לקביעת תור: 
				 	<a class="link" href="tel: +97273-3772888"> 
				 		<div class="text">073-3772888</div> 
				 	</a> 
				</icontext> 
				<icontext class="big-icon handshake" icon="handshake.svg">
					<img src="/images/handshake.cdfd1791.svg" class="icon"/> 
					<div> 
						<b>מוקד קצין פניות ציבור: </b>
						<br/> 
						<a class="link" href="tel: +9721111"> 
							<div class="text">1111 </div> 
						</a>
						 שלוחה 5 
					</div> 
				</icontext> 
			</div> 
		</div>
	)
}

export default Clinic
