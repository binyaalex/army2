import SmallHeader from "../repeat/SmallHeader";

const Laundry = () => {
	return (
		<div class="laundry"> 
			<SmallHeader title='כביסה' />
			<div class="flexible"> 
				<img src="/images/laundry.f7aa4442.svg"/> 
				<div class="col flexible"> 
					<div class="col flexible">
						במהלך 
						<div class="emphasis"> כל ימות השבוע,</div>
						<br/> כלל החיילים יכולים להביא כל פריט כביסה 
						<div class="alt-color emphasis"> למעט גרביים וחזיות</div>
						.
					</div> 
					<div class="flex-end"> 
						<div class="emphasis">הכביסה הנקייה </div>
						 מגיעה 
						<div class="alt-color emphasis"> שבוע </div>
						 לאחר שנשלחה 
						<div class="alt-color emphasis"> ביום שלישי ב-08:00. </div> 
					</div> 
				</div> 
				<img class="hangers" src="/images/hangers.87ef778c.svg"/> 
				<div> בתפקידי 
					<div class="alt-color emphasis"> רס”ר משמעת, 
						<br/> דרגת רנ”ג וסגני אלופים ומעלה 
					</div> - הכביסה מגיעה מגוהצת על קולב. 
				</div> 
			</div>
		</div>
	)
}

export default Laundry
