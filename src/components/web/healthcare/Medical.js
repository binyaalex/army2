import SmallHeader from "../repeat/SmallHeader";

const Medical = () => {
	return (
		<div className="medical-centre" displayname="healthcare.json5#medicalCentre.title" icon-large="" icon="medical-centre.svg"> 
			<SmallHeader title='מרפ"א דרום' text='' />
			<icontext icon="icon-time.svg">
				<img src="/images/icon-time.13cd3768.svg" className="icon"/> 
				<openinghours src="healthcare.json5#medicalCentre.openingHours">
					<div>
						<div className="emphasis">א׳ - ה׳: </div>
						<div>16:30 - 08:30</div>
					</div>
				</openinghours> 
			</icontext> 
			<div className="alt-color emphasis">לקביעת תור לרופא מומחה פנו לרופא היחידה</div>
			<decoratedtitle decor="sub-underline.svg" className="subtitle">
				<div className="title">בית מרקחת</div>
				<img className="title-underline" src="/images/sub-underline.39f8bd11.svg"/>
			</decoratedtitle> 
			<div className="flexible pack pharmacy"> 
				<div className="col flexible"> 
					<icontext className="first-centered" icon="pill.svg">
						<img src="/images/pill.b3f92a68.svg" className="icon"/>
						ניפוק 
						<b> תרופות ראשוניות ורופאים מומחים </b>
						 לכלל המשרתים. 
					</icontext> 
					<icontext className="flex-end perscription" icon="prescription.svg">
						<img src="/images/prescription.61119fc7.svg" className="icon"/>
						בתי המרקחת הצבאיים מכבדים את 
						<b> כלל סוגי המרשמים</b>
						. 
					</icontext> 
				</div> 
				<div className="center col flexible"> 
					<div className="alt-color emphasis inline">ניתן להגיע ללא תיאום בשעות הפעילות:</div> 
					<icontext className="first-centered" icon="icon-time.svg">
						<img src="/images/icon-time.13cd3768.svg" className="icon"/> 
						<openinghours src="healthcare.json5#pharmacyOpeningHours">
							<div>
								<div className="emphasis">א׳ - ה׳: </div>
								<div>12:00 - 08:00, 16:30 - 12:30</div>
							</div>
						</openinghours> 
					</icontext> 
				</div> 
				<icontext className="first-centered" icon="icon-phone-black.svg">
					<img src="/images/icon-phone-black.033ad4fd.svg" className="icon"/>
					 לבית המרקחת: 
					<a className="link" href="tel: 97273-3773780"> 
						<div className="text"> 073-3773780 </div> 
					</a> 
				</icontext> 
			</div> 
		</div>
	)
}

export default Medical
