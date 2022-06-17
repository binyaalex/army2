import SmallHeader from "../repeat/SmallHeader";

const Barbershop = (props) => {
	return (
		<div className="barber-shop" displayname="services.json5#barbershop.title" icon="scissors.svg">
			<SmallHeader title='מספרה' />
			<div className="flexible"> 
				<div className="col expand flexible x4"> 
					<div> השיער הספיק לצמוח השבוע? <br/> 
						<div className="alt-color emphasis">תאמו תור מראש </div>
						 והסתפרו בבסיס! 
					</div> 
					<icontext className="flex-end location" icon="icon-location.svg">
						<img src="/images/icon-location.b55b841e.svg" className="icon"/>
						המרכז המסחרי, המבנה הראשון 
					</icontext> 
				</div> 
				<div className="col expand flexible x4"> 
					<icontext icon="icon-time.svg">
						<img src="/images/icon-time.13cd3768.svg" className="icon"/> 
						<openinghours src="services.json5#barbershop.openingHours">
							<div>
								<div className="emphasis">א׳ - ה׳: </div>
								<div>18:45 - 08:00</div>
							</div>
							<div>
								<div className="emphasis">הפסקה: </div>
								<div>13:00 - 12:00</div>
							</div>
							<div>
								<div className="emphasis">שישי וערבי חג: </div>
								<div>12:00 - 08:00</div>
							</div>
						</openinghours> 
					</icontext> 
					<icontext className="flex-end" icon="icon-phone-black.svg" onClick={() => { props.setOpenSideBar(!props.openSideBar)}}>
						<img src="/images/icon-phone-black.033ad4fd.svg" className="icon"/>
							לקביעת תור: 
							<a className="link" href="tel: 972545562343"> 
								<div className="text"> 054-5562343 </div> 
							</a> 
					</icontext> 
				</div> 
				<div className="expand flexible queue x5"> 
					<div className="col expand flexible img x3"> 
						<img src="/images/brimless-hat.95e69b9a.svg"/> 
						<div className="flex-end"> 
							<div className="emphasis">חניכים:</div>
							<br/> תאמו תור  <b className="as-content"> דרך המפקד </b>
							,<br/>
							<b className="as-content">לפחות יום </b>
							 מראש 
						</div> 
					</div> 
					<div className="col expand flexible img x2"> 
						<img src="/images/cap-hat.78bee39d.svg"/> 
						<div className="flex-end"> 
							<div className="emphasis">סגל:</div>
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
