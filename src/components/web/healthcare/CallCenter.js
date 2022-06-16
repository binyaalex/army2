import SmallHeader from "../repeat/SmallHeader";

const CallCenter = () => {
	return (
		<div className="medical-call-centre" displayname="healthcare.json5#medicalCallCentreTitle" icon="medical-call-centre.svg"> 
			<div className="flexible"> 
			<SmallHeader title='מוקד מכל הלב' text='' />
				<img className="icon" src="/images/medical-call-centre.124a4787.svg"/> 
			</div> 
			<div className="flexible pack"> 
				<div>
					 ניתן 
					<b> לקבוע תור </b>
					 לשירותים רפואיים 
					<b> צבאיים ואזרחיים </b>
					 כאחד.
					<br/>
					<br/>
					 המוקד נותן מענה 
					<b> לחיילים, הורים, מפקדים ולאנשי סגל רפואי</b>
					.
					<br/>
					<br/>
					 ניתן לקבל ייעוץ טלפוני עם 
					<b> אחות מוסמכת</b>
					.
					<br/> 
				</div> 
				<icontext icon="icon-time.svg">
					<img src="/images/icon-time.13cd3768.svg" className="icon"/> 
					<b>זמין 24/7</b> 
					<br/> 
					<div className="emphasis">בשבת יטופלו פניות דחופות בלבד</div> 
				</icontext> 
			</div> 
			<div className="contact"> 
				<decoratedtitle decor="sub-underline.svg" className="subtitle">
					<div className="title">דרכי פנייה </div>
					<img className="title-underline" src="/images/sub-underline.39f8bd11.svg"/>
				</decoratedtitle> 
				<icontext icon="icon-chat.svg">
					<img src="/images/icon-chat.dc023409.svg" className="icon"/> 
					<b>SMS </b>
					 למספר: 
					<a className="link" href="tel: 97252-9990110"> 
						<div className="text"> 052-9990110 </div> 
					</a> 
				</icontext> 
				<icontext icon="icon-website.svg">
					<img src="/images/icon-website.9df3be1d.svg" className="icon"/>
					פורטל “מקול הלב” - במחשב 
					<b> הצבאי</b>
				</icontext> 
				<icontext icon="icon-mail.svg">
					<img src="/images/icon-mail.c6a8c80d.svg" className="icon"/> 
					<div className="col flexible"> 
						<div>
							 מייל 
							<b> אזרחי</b>
							: 
							<a className="link" href="mailto: MOKED6690@idf.gov.il"> 
								<div className="text"> MOKED6690@idf.gov.il </div> 
							</a> 
						</div>
						<br/> מייל 
						<b> צבאי </b>
						 - מקול הלב<br/>
						<br/> מייל 
						<b> צבאי </b>
						  - 
						<b> “אישי נשי” </b>
						 תיבת פניות לרפואת נשים 
					</div> 
				</icontext> 
			</div> 
		</div>
	)
}

export default CallCenter
