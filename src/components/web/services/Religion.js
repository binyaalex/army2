import SmallHeader from "../repeat/SmallHeader";

const Religion = () => {
	return (
		<div className="religion" displayname="services.json5#religionDepartment.title" icon="religion.svg"> 
			<SmallHeader title='רבנות' />
			<div className="flexible"> 
				<div className="col flexible"> 
					<div>שומרים מסורת? מעוניינים להתחיל? לא מכירים את זכויותכם? יש למי לפנות!</div>
					<icontext className="location" icon="icon-location.svg">
						<img src="/images/icon-location.b55b841e.svg" className="icon"/>
						מפקדה קומה 0, משרדים 12, 13, 14, 20 
					</icontext> 
					<icontext icon="icon-time.svg">
						<img src="/images/icon-time.13cd3768.svg" className="icon"/> 
						<openinghours src="services.json5#religionDepartment.openingHours"> 
							<div>
								<div className="emphasis">א׳ - ה׳: </div>
								<div>17:30 - 08:00</div>
							</div>
							<div>
								<div className="emphasis">הפסקה: </div>
								<div>13:00 - 12:00</div>
							</div>
						</openinghours> 
					</icontext> 
				</div> 
				<div className="centre col details flexible"> 
					<icontext icon="icon-phone-black.svg">
						<img src="/images/icon-phone-black.033ad4fd.svg" className="icon"/> 
						<div className="col flexible parallel"> 
							<div>אחראי כשרות ודת:</div> 
							<div>רכזי מו"ר:</div> 
							<div>רב קריית ההדרכה:</div> 
						</div> 
						<div className="col flexible"> 
							<a className="line-end link" href="tel: +97273-3772644"> 
								<div className="text">073-3772644</div> 
							</a> 
							<a className="line-end link" href="tel: +97273-3772609"> 
								<div className="text">073-3772609</div> 
							</a> 
							<a className="line-end link" href="tel: +97273-3772608"> 
								<div className="text">073-3772608</div> 
							</a> 
						</div> 
					</icontext> 
					<div> 
						<div>השארו מעודכנים!</div> 
						<div> 
							<a className="button google-play link store" draggable="false" href="https://play.google.com/store/apps/details?id=mador.till.q_app_new"> 
								<img className="icon" alt="Get it on Google Play" src="/images/google-play.f9389271.png"/> 
							</a>  
							<a className="appstore button link store" draggable="false" href="https://apps.apple.com/il/app/%D7%A9%D7%90%D7%98-%D7%9C-%D7%94%D7%99%D7%A1%D7%A2%D7%99%D7%9D-%D7%A6%D7%94-%D7%9C/id1504198076?itsct=apps_box&amp;itscg=30200">
								<img className="icon" src="/images/ios.fe587be0.svg"/> 
							</a> 
						</div> 
					</div> 
				</div> 
			</div>  
			<video src="/images/religion.a632f4e5.mp4" poster="/images/religion.f5d8f898.png" controls preload="none"></video> 
		</div>
	)
}

export default Religion
