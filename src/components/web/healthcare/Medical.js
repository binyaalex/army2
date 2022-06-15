import SmallHeader from "../repeat/SmallHeader";

const Medical = () => {
	return (
		<div class="medical-centre" displayname="healthcare.json5#medicalCentre.title" icon-large="" icon="medical-centre.svg"> 
			<SmallHeader title='מרפ"א דרום' text='' />
			<icontext icon="icon-time.svg">
				<img src="/images/icon-time.13cd3768.svg" class="icon"/> 
				<openinghours src="healthcare.json5#medicalCentre.openingHours">
					<div>
						<div class="emphasis">א׳ - ה׳: </div>
						<div>16:30 - 08:30</div>
					</div>
				</openinghours> 
			</icontext> 
			<div class="alt-color emphasis">לקביעת תור לרופא מומחה פנו לרופא היחידה</div>
			<decoratedtitle decor="sub-underline.svg" class="subtitle">
				<div class="title">בית מרקחת</div>
				<img class="title-underline" src="/images/sub-underline.39f8bd11.svg"/>
			</decoratedtitle> 
			<div class="flexible pack pharmacy"> 
				<div class="col flexible"> 
					<icontext class="first-centered" icon="pill.svg">
						<img src="/images/pill.b3f92a68.svg" class="icon"/>
						ניפוק 
						<b> תרופות ראשוניות ורופאים מומחים </b>
						 לכלל המשרתים. 
					</icontext> 
					<icontext class="flex-end perscription" icon="prescription.svg">
						<img src="/images/prescription.61119fc7.svg" class="icon"/>
						בתי המרקחת הצבאיים מכבדים את 
						<b> כלל סוגי המרשמים</b>
						. 
					</icontext> 
				</div> 
				<div class="center col flexible"> 
					<div class="alt-color emphasis inline">ניתן להגיע ללא תיאום בשעות הפעילות:</div> 
					<icontext class="first-centered" icon="icon-time.svg">
						<img src="/images/icon-time.13cd3768.svg" class="icon"/> 
						<openinghours src="healthcare.json5#pharmacyOpeningHours">
							<div>
								<div class="emphasis">א׳ - ה׳: </div>
								<div>12:00 - 08:00, 16:30 - 12:30</div>
							</div>
						</openinghours> 
					</icontext> 
				</div> 
				<icontext class="first-centered" icon="icon-phone-black.svg">
					<img src="/images/icon-phone-black.033ad4fd.svg" class="icon"/>
					 לבית המרקחת: 
					<a class="link" href="tel: 97273-3773780"> 
						<div class="text"> 073-3773780 </div> 
					</a> 
				</icontext> 
			</div> 
		</div>
	)
}

export default Medical
