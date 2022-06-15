import SmallHeader from "../repeat/SmallHeader";

const DoctorVisit = () => {
	return (
		<div class="doctor-visits" displayname="healthcare.json5#doctorVisitsTitle" icon="doctor-visits.svg"> 
			<SmallHeader title='ביקורופא' text='' />
			 אתם בבית ולא מרגישים טוב? גשו לסניף ביקורופא הקרוב לביתכם! 
			<a class="button link">
				 לאתר  
				<img class="icon" src="/images/arrow-leftb.badb2027.svg"/> 
			</a> 
		</div>
	)
}

export default DoctorVisit
