const Scheduling = () => {
	return (
		<div class="disabled"> 
			<decoratedtitle>
				<div class="title">שיבוצי חד"א</div>
				<img class="title-underline" src="/images/title-black.07ae5174.svg"/>
			</decoratedtitle> 
			<div class="schedule"> 
				<div class="dropdowns"> 
					<dropdown data="shared.json5#bhds" defaultvalue="בה&quot;ד" tabindex="0">
						<div class="content">
							<div>
								<div>בה"ד</div>
								<div class="retractable" opt-id=""></div>
							</div>
							<div opt-id="commandCenter">מפקדה</div>
							<div opt-id="6">בה"ד 6</div>
							<div opt-id="7">בה"ד 7</div>
							<div opt-id="10">בה"ד 10</div>
							<div opt-id="hinuh">בה"ד חינוך</div>
							<div opt-id="11">בה"ד 11</div>
							<div opt-id="13">בה"ד 13</div>
							<div opt-id="20">בה"ד 20</div>
						</div>
					</dropdown> 
					<dropdown data="##daysOfWeek" defaultvalue="יום" tabindex="0">
						<div class="content">
							<div>
								<div>יום</div>
								<div class="retractable" opt-id=""></div>
							</div>
							<div opt-id="0">א׳</div>
							<div opt-id="1">ב׳</div>
							<div opt-id="2">ג׳</div>
							<div opt-id="3">ד׳</div>
							<div opt-id="4">ה׳</div>
							<div opt-id="5">ו׳</div>
							<div opt-id="6">ש׳</div>
						</div>
					</dropdown> 
				</div> 
				<div class="meal-details"> 
					<div class="icons"> 
						<img class="time" src="/images/half-sun.99fa9fef.svg"/> 
						<img class="location" src="/images/icon-location.b55b841e.svg"/> 
					</div> 
					<div class="text"> 
						<openinghours type="hours">זמן</openinghours> 
						<div>מיקום</div> 
					</div> 
				</div> 
				<div class="meal-details"> 
					<div class="icons"> 
						<img class="time" src="/images/sun.2fb68afe.svg"/> 
						<img class="location" src="/images/icon-location.b55b841e.svg"/> 
					</div> 
					<div class="text"> 
						<openinghours type="hours">זמן</openinghours> 
						<div>מיקום</div> 
					</div> 
				</div> 
				<div class="meal-details"> 
					<div class="icons"> 
						<img class="time" src="/images/moon.f033630d.svg"/> 
						<img class="location" src="/images/icon-location.b55b841e.svg"/> 
					</div> 
					<div class="text"> 
						<openinghours type="hours">זמן</openinghours> 
						<div>מיקום</div> 
					</div> 
				</div> 
			</div> 
			<div class="date">מתוקף מה-20/10/2009</div> 
			<decoratedtitle>
				<div class="title">תפריט לשבוע</div>
				<img class="title-underline" src="/images/title-black.07ae5174.svg"/>
			</decoratedtitle> 
			<div class="menu"> 
				<div class="dropdowns"> 
					<dropdown data="##daysOfWeek" defaultvalue="יום" tabindex="0">
						<div class="content">
							<div>
								<div>יום</div>
								<div class="retractable" opt-id=""></div>
							</div>
							<div opt-id="0">א׳</div>
							<div opt-id="1">ב׳</div>
							<div opt-id="2">ג׳</div>
							<div opt-id="3">ד׳</div>
							<div opt-id="4">ה׳</div>
							<div opt-id="5">ו׳</div>
							<div opt-id="6">ש׳</div>
						</div>
					</dropdown> 
					<dropdown data="dining.json5#meals" defaultvalue="ארוחה" tabindex="0">
						<div class="content">
							<div>
								<div>ארוחה</div>
								<div class="retractable" opt-id=""></div>
							</div>
							<div opt-id="morning">בוקר</div>
							<div opt-id="launch">צהריים</div>
							<div opt-id="evening">ערב</div>
							<div opt-id="fast-luanch">פיתייה</div>
						</div>
					</dropdown> 
				</div> 
				<div class="meal-preview"> 
					<img src="/images/food-main.21d4be4f.svg"/> 
					<div class="text-center">מנה עיקרית</div> 
				</div> 
				<div class="meal-preview"> 
					<img src="/images/food-side.752e3fb8.svg"/> 
					<div class="text-center">תוספות</div> 
				</div> 
				<div class="meal-preview"> 
					<img src="/images/food-salad.6db5acd5.svg"/> 
					<div class="text-center">סלטים</div> 
				</div> 
			</div> 
		</div>
	)
}

export default Scheduling
