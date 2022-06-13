const Shuttle = () => {

	const open = () => {
		const content = document.querySelector('.content')
		console.log(content.style.maxHeight)
		if (content.style.maxHeight === '') {
			content.style.maxHeight = '40vh'
			content.style.overflow = 'auto'

		} else {
			content.style.maxHeight = ''
			content.style.overflow = ''
		}
		console.log(content.style.maxHeight)
	}

	return (
		<div class="focused shuttle-schedule"> 
			<decoratedtitle>
				<div class="title">שאטלים ליום ראשון</div>
				<img class="title-underline" src="/images/title-black.07ae5174.svg"/>
			</decoratedtitle> 
			<dropdown data="shared.json5#places" defaultvalue="בחר מיקום" tabindex="0"> 
				<div class="content">
					<div>
						<div>בחר מיקום</div>
						<div onClick={open} class="retractable" opt-id=""></div>
					</div>
					<div opt-id="loc-KS">קריית שמונה</div>
					<div opt-id="loc-HAT">חצור</div>
					<div opt-id="loc-CH">כרמיאל</div>
					<div opt-id="loc-UC">יוקנעם</div>
					<div opt-id="loc-HP">עפולה</div>
					<div opt-id="loc-CN">כפר יונה</div>
					<div opt-id="loc-CT">תה"ש / קריית אונו</div>
					<div opt-id="loc-PT">פתח תקווה</div>
					<div opt-id="loc-CS">כפר סבא</div>
					<div opt-id="loc-HO">חולון</div>
					<div opt-id="loc-RZ-W">רשל"צ מערב</div>
					<div opt-id="loc-RZ-E">רשל"צ מזרח</div>
					<div opt-id="loc-RE">רחובות</div>
					<div opt-id="loc-GD">גדרה</div>
					<div opt-id="loc-ASD">אשדוד</div>
					<div opt-id="loc-ASK">אשקלון</div>
					<div opt-id="loc-MO">מודיעין</div>
					<div opt-id="loc-SHA">שהם</div>
					<div opt-id="loc-MTZ">מבשרת ציון</div>
					<div opt-id="loc-JE-N">ירושלים צפון</div>
					<div opt-id="loc-JE-S">ירושלים דרום</div>
					<div opt-id="loc-BSH">בית שמש</div>
					<div opt-id="loc-BS">באר שבע מרכז</div>
					<div opt-id="loc-AL">אילת</div>
					<div opt-id="loc-ZY">זכרון יעקוב</div>
					<div opt-id="loc-NA">נהריה</div>
					<div opt-id="loc-HAI">חיפה</div>
					<div opt-id="loc-BIN">בנימינה</div>
					<div opt-id="loc-HER">הרצליה</div>
					<div opt-id="loc-TA">תל אביב</div>
					<div opt-id="loc-RA-N">ראש העין צפון</div>
				</div>
			</dropdown> 
			<icontext class="location" icon="/images/icon-location.svg">
				<img src="/images/icon-location.b55b841e.svg" class="icon"/> 
				<a class="link"> 
					<div class="text">מיקום</div>
				</a> 
			</icontext> 
			<div class="schedule"> 
				<icontext icon="/images/icon-time.svg">
					<img src="/images/icon-time.13cd3768.svg" class="icon"/> 
					<openinghours type="hours" class="text">זמן</openinghours>
				</icontext> 
			</div> 
			<div class="category-separator"></div> 
		</div>
	)
}

export default Shuttle
