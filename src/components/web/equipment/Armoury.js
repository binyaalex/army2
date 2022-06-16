import SmallHeader from "../repeat/SmallHeader";

const Armoury = () => {
	return (
		<div class="armoury"> 
			<SmallHeader title='נשקייה' />
			<div class="col flexible"> 
				<div class="flexible"> 
					<icontext class="expand" icon="icon-time.svg">
						<img src="/images/icon-time.13cd3768.svg" class="icon"/>
						סגל יקר, אל תלכו עד לנשקייה סתם! בדקו מהן שעות הפתיחה...
					</icontext> 
					<div class="expand">ניפוק נשק לסגל 
						<div class="alt-color emphasis"> ליותר מ-15 איש </div>
						 דורש תיאום מראש.
					</div> 
					<icontext class="expand if phone" icon="icon-phone-black.svg">
						<img src="/images/icon-phone-black.033ad4fd.svg" class="icon"/>
						לפרטים ותיאומים:
						<a class="link" href="tel: 97273-3772384"> 
							<div class="text">073-3772384</div> 
						</a> 
					</icontext> 
				</div> 
				<div class="flexible schedule"> 
					<div class="expand flexible"> 
						<openinghours class="no-start-margin" src="military-gear.json5#armoury.openingHours"> 
							<div>
								<div class="emphasis">א׳: </div>
								<div>11:45 - 09:30</div>
							</div>
							<div>
								<div class="emphasis">ב׳ - ג׳: </div>
								<div>10:00 - 08:00</div>
							</div>
							<div>
								<div class="emphasis">ד׳: </div>
								<div>10:00 - 08:00</div>
							</div>
							<div>
								<div class="emphasis">ה׳: </div>
								<div>11:45 - 08:00</div>
							</div>
						</openinghours> 
						<div class="break">הפסקה</div> 
						<openinghours type="hours" src="military-gear.json5#armoury.afterBreaks"> 
							<div>
								<div>15:00 - 13:00</div>
							</div>
							<div>
								<div>14:30 - 13:00</div>
							</div>
							<div>
								<div>16:30 - 14:30</div>
							</div>
							<div>
								<div>15:00 - 13:00</div>
							</div>
						</openinghours> 
					</div> 
					<div class="expand"> 
						<div class="alt-color emphasis">פלוגת הגנה </div>
						 יקבלו שירות 
						<b> בשלישי </b>
						 בין השעות 
						<b> 11:00 - 11:45 </b>
						, חריגים עד השעה 14:00. 
					</div> 
					<div class="expand flexible"> 
						<img class="gun" src="/images/gun.41f89caf.svg"/> 
					</div> 
				</div> 
			</div>
		</div>
	)
}

export default Armoury
