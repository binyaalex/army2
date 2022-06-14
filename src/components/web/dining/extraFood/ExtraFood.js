import SmallHeader from "../../repeat/SmallHeader";

const extraFood = () => {
	return (
		<div className='food-deployments' >
			<SmallHeader title='פריסות' text='בקריית ההדרכה ניתן להזמין ולמשוך פריסה מהחד"א - המענה המושלם לרעב בין ארוחות!' />
			<div class="flexible"> 
				<div class="expand x3"> 
					<SmallHeader title='איך מזמינים פריסה? ' text='' />
					 פנו <b>לתכנון הצבאי</b> של הבה"ד שלכם והזינו <b>למערכת "פריסה"</b> <br/> <br/> באמצאות <div class="emphasis">מספר המפגש</div> שתקבלו תוכלו למשוך את הפריסה ! 
				</div> 
				<div class="expand x2"> 
					<SmallHeader title='פריסת ארבע ' text='' />
					<icontext icon="icon-time.svg" class="first-centered time">
						<img src="/images/icon-time.13cd3768.svg" class="icon"/> 
						<div> 
							<div class="emphasis">ימי ראשון + חמישי</div><br/>
							<b>איסוף בשעות:</b>
							<openinghours class="as-content" type="hours" src="dining.json5#foodDeps.luanch"> 
								<div>
									<div>15:30 - 15:00</div>
								</div>
							</openinghours> 
						</div> 
					</icontext> 
					<icontext icon="food-main.svg">
						<img src="/images/food-main.21d4be4f.svg" class="icon"/>
						 לחם פרוס, ממרח שוקולד / ריבות,<br/>
						  פירות העונה, קפה / תה 
					</icontext> 
				</div> 
				<div class="expand x2"> 
					<decoratedtitle class="subtitle" decor="sub-underline.svg">
						<div class="title">פריסות לילה </div>
						<img class="title-underline" src="/images/sub-underline.39f8bd11.svg"/>
					</decoratedtitle> 
					<icontext icon="icon-time.svg" class="first-centered time">
						<img src="/images/icon-time.13cd3768.svg" class="icon"/> 
						<div> 
							<div class="emphasis">ימי שני + רביעי</div><br/>
							<b>איסוף בשעות:</b> 
							<openinghours class="as-content" type="hours" src="dining.json5#foodDeps.night"> 
								<div>
									<div>20:30 - 20:00</div>
								</div>
							</openinghours> 
						</div> 
					</icontext> 
					<icontext icon="food-main.svg">
						<img src="/images/food-main.21d4be4f.svg" class="icon"/> 
						<div class="alt-color"> 
							<div class="emphasis">יום ב':</div>
							 נקניקים / טונה<br/> 
							 <div class="emphasis">יום ג':</div>
							 גבינה לבנה / קוטז', ממרח סויה<br/> 
							 <div class="emphasis">יום ד':</div> 
							 גבינה צהובה / מותכת, ממרח סויה <br/> <br/> לחם + לחם דגנים, מלפפון + עגבניה, <br/> פירות העונה, קפה / תה 
						</div> 
					</icontext> 
				</div> 
			</div>		
		</div>
	)
}

export default extraFood