import SmallHeader from "../../repeat/SmallHeader";
import MealDays from "./MealDays";

const Opening = () => {

	const mealsSchedule = [
		{
			days: `ימי א' עד ה'`,
			time: [
				{
					img: '/images/s-morning.c53c11a0.svg',
					text: 'בוקר',
					hours: '08:00 - 06:00',
				},
				{
					img: '/images/s-lunch.4b0ba03c.svg',
					text: 'צהריים',
					hours: '14:00 - 11:30',
				},
				{
					img: '/images/s-evening.428ca55b.svg',
					text: 'ערב',
					hours: '20:00 - 18:00',
				},
			]
		},
		{
			days: `ימי א' עד ה'`,
			time: [
				{
					img: '/images/s-morning.c53c11a0.svg',
					text: 'בוקר',
					hours: '08:00 - 06:30',
				},
				{
					img: '/images/s-lunch.4b0ba03c.svg',
					text: 'צהריים',
					hours: '13:30 - 11:30',
				},
				{
					img: '/images/s-evening.428ca55b.svg',
					text: 'ערב',
					hours: '22:00 - 18:00',
				},
			]
		},
		{
			days: `ימי א' עד ה'`,
			time: [
				{
					img: '/images/s-morning.c53c11a0.svg',
					text: 'בוקר',
					hours: '08:00 - 06:30',
				},
				{
					img: '/images/s-lunch.4b0ba03c.svg',
					text: 'צהריים',
					hours: '14:30 - 11:30',
				},
				{
					img: '/images/s-evening.428ca55b.svg',
					text: 'ערב',
					hours: '19:00 - 18:00',
				},
			]
		},
	]

	return (
		<>
			<SmallHeader title='שעות הפתיחה' />
			<div class="opening-hours"> 
				{
					mealsSchedule.map((el, i) => {
						return (
							<MealDays days={el.days} time={el.time} key={i} /> 
						)
					})
				}
				{/*<div> 
					<div class="emphasis subtitle">ימי א'-ה':</div> 
						<div> 
							<img class="time" src="/images/s-morning.c53c11a0.svg"/> 
							<b>בוקר</b>: 
							<openinghours type="hours" src="dining.json5#openingHours.0.0">
								<div>
									<div>08:00 - 06:00</div>
								</div>
							</openinghours> 
						</div> 
						<div> 
							<img class="time" src="/images/s-lunch.4b0ba03c.svg"> <b>צהריים</b>: <openinghours type="hours" src="dining.json5#openingHours.0.1"><div><div>14:00 - 11:30</div></div></openinghours> </div> <div> <img class="time" src="s-evening.428ca55b.svg"> <b>ערב</b>: <openinghours type="hours" src="dining.json5#openingHours.0.2"><div><div>20:00 - 18:00</div></div></openinghours> </div> </div> <div> <div class="emphasis subtitle">שישי:</div> <div> <img class="time" src="s-morning.c53c11a0.svg"> <b>בוקר</b>: <openinghours type="hours" src="dining.json5#openingHours.1.0"><div><div>08:00 - 06:30</div></div></openinghours> </div> <div> <img class="time" src="s-lunch.4b0ba03c.svg"> <b>צהריים</b>: <openinghours type="hours" src="dining.json5#openingHours.1.1"><div><div>13:30 - 11:30</div></div></openinghours> </div> <div> <img class="time" src="s-evening.428ca55b.svg"> <b>ערב</b>: <openinghours type="hours" src="dining.json5#openingHours.1.2"><div><div>22:00 - 18:00</div></div></openinghours> </div> </div> <div> <div class="emphasis subtitle">שבת:</div> <div> <img class="time" src="s-morning.c53c11a0.svg"> <b>בוקר</b>: <openinghours type="hours" src="dining.json5#openingHours.2.0"><div><div>08:00 - 06:30</div></div></openinghours> </div> <div> <img class="time" src="s-lunch.4b0ba03c.svg"> <b>צהריים</b>: <openinghours type="hours" src="dining.json5#openingHours.2.1"><div><div>14:30 - 11:30</div></div></openinghours> </div> <div> <img class="time" src="s-evening.428ca55b.svg"> <b>ערב</b>: <openinghours type="hours" src="dining.json5#openingHours.2.2"><div><div>19:00 - 18:00</div></div></openinghours> </div> </div> </div>*/}
			</div>
		</>
	)
}

export default Opening
