import SmallHeader from "../repeat/SmallHeader";

const DoctorVisit = () => {
	return (
		<div className="doctor-visits" displayname="healthcare.json5#doctorVisitsTitle" icon="doctor-visits.svg"> 
			<SmallHeader title='ביקורופא' text='' />
			 אתם בבית ולא מרגישים טוב? גשו לסניף ביקורופא הקרוב לביתכם! 
			<a className="button link">
				 לאתר  
				<img className="icon" src="/images/arrow-leftb.badb2027.svg"/> 
			</a> 
		</div>
	)
}

export default DoctorVisit
