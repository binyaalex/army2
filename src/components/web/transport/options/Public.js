import SmallHeader from "../../repeat/SmallHeader";

const Public = (title) => {
	return (
		<div className="focused public-transport prev"> 
			<SmallHeader title=' תחב"ץ מב"ש לבסיס ' /> 
			<div className="text"> 
				<div className="line"> מטרופולין 
					<div className="emphasis"> קו 170 </div>
					מגיע לש.ג הראשי 
				</div>  
			</div> 
			<img className="bus-road" src="/images/public-transport-banner.43aa8115.svg"/> 
		</div>
	)
}

export default Public
