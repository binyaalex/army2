import SmallHeader from "../../repeat/SmallHeader";

const Public = (title) => {
	return (
		<div class="focused public-transport prev"> 
			<SmallHeader title=' תחב"ץ מב"ש לבסיס ' /> 
			<div class="text"> 
				<div class="line"> מטרופולין 
					<div class="emphasis"> קו 170 </div>
					מגיע לש.ג הראשי 
				</div>  
			</div> 
			<img class="bus-road" src="/images/public-transport-banner.43aa8115.svg"/> 
		</div>
	)
}

export default Public
